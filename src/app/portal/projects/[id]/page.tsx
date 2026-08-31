'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { usePortal } from '@/lib/portal/context';
import {
  getProjectDetail,
  getProjectMilestones,
  formatCurrency,
  formatDate,
  type Project,
  type Milestone,
  type ProjectStatus,
  type MilestoneStatus,
} from '@/lib/portal/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, DollarSign, CheckCircle2, Circle, Loader2 } from 'lucide-react';
import Link from 'next/link';

const projectStatusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  planning: { label: 'Planning', className: 'bg-purple-50 text-purple-700 border-purple-200' },
  on_hold: { label: 'On Hold', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  completed: { label: 'Completed', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  cancelled: { label: 'Cancelled', className: 'bg-slate-100 text-slate-600 border-slate-200' },
};

const milestoneStatusConfig: Record<MilestoneStatus, { label: string; dotClass: string; lineClass: string; textClass: string }> = {
  completed: {
    label: 'Completed',
    dotClass: 'bg-emerald-500 border-emerald-500',
    lineClass: 'bg-emerald-300',
    textClass: 'text-slate-900',
  },
  in_progress: {
    label: 'In Progress',
    dotClass: 'bg-[#115FC9] border-[#115FC9]',
    lineClass: 'bg-slate-200',
    textClass: 'text-slate-900',
  },
  pending: {
    label: 'Pending',
    dotClass: 'bg-white border-slate-300',
    lineClass: 'bg-slate-200',
    textClass: 'text-slate-500',
  },
};

function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  if (milestones.length === 0) {
    return (
      <p className="text-sm text-slate-400 py-4">No milestones defined yet.</p>
    );
  }

  return (
    <div className="relative">
      {milestones.map((milestone, idx) => {
        const cfg = milestoneStatusConfig[milestone.status];
        const isLast = idx === milestones.length - 1;

        return (
          <div key={milestone.id} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Timeline track */}
            <div className="flex flex-col items-center">
              <div className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 ${cfg.dotClass} transition-colors`}>
                {milestone.status === 'completed' ? (
                  <CheckCircle2 className="size-4 text-white" />
                ) : milestone.status === 'in_progress' ? (
                  <Loader2 className="size-4 text-white animate-spin" />
                ) : (
                  <Circle className="size-3 text-slate-300" />
                )}
              </div>
              {!isLast && (
                <div className={`w-0.5 flex-1 min-h-8 ${cfg.lineClass}`} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-1">
              <h4 className={`font-semibold text-sm ${cfg.textClass}`}>{milestone.title}</h4>
              {milestone.description && (
                <p className="text-sm text-slate-500 mt-0.5 line-clamp-2">{milestone.description}</p>
              )}
              {milestone.due_date && (
                <p className="text-xs text-slate-400 mt-1">Due: {formatDate(milestone.due_date)}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { client } = usePortal();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!client || !id) return;

    async function load() {
      const [proj, ms] = await Promise.all([
        getProjectDetail(id),
        getProjectMilestones(id),
      ]);

      if (!proj || proj.client_id !== client.id) {
        setNotFound(true);
      } else {
        setProject(proj);
        setMilestones(ms);
      }
      setLoading(false);
    }
    load();
  }, [client, id]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Project not found.</p>
        <Button variant="outline" className="mt-4" onClick={() => router.push('/portal/projects')}>
          Back to Projects
        </Button>
      </div>
    );
  }

  const statusCfg = projectStatusConfig[project.status];

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        href="/portal/projects"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to Projects
      </Link>

      {/* Project Header */}
      <Card className="gap-4">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-1">
              <CardTitle className="text-xl sm:text-2xl text-slate-900">{project.title}</CardTitle>
              {project.description && (
                <p className="text-sm text-slate-500 max-w-2xl">{project.description}</p>
              )}
            </div>
            <Badge variant="outline" className={statusCfg.className}>
              {statusCfg.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 font-medium">Overall Progress</span>
              <span className="font-bold text-lg text-slate-900 font-heading">{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-3" />
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {(project.start_date || project.deadline) && (
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <CalendarDays className="size-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Timeline</p>
                  <p className="text-sm font-medium text-slate-700">
                    {formatDate(project.start_date)}
                    {project.start_date && project.deadline ? ' → ' : ''}
                    {formatDate(project.deadline)}
                  </p>
                </div>
              </div>
            )}

            {project.budget != null && project.budget > 0 && (
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <DollarSign className="size-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Budget</p>
                  <p className="text-sm font-medium text-slate-700">{formatCurrency(project.budget)}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card className="gap-4">
        <CardHeader>
          <CardTitle className="text-lg text-slate-900">Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <MilestoneTimeline milestones={milestones} />
        </CardContent>
      </Card>
    </div>
  );
}
