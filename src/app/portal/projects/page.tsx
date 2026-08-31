'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePortal } from '@/lib/portal/context';
import { getClientProjects, formatCurrency, formatDate, type Project, type ProjectStatus } from '@/lib/portal/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { CalendarDays, DollarSign, ArrowRight } from 'lucide-react';

const projectStatusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  planning: { label: 'Planning', className: 'bg-purple-50 text-purple-700 border-purple-200' },
  on_hold: { label: 'On Hold', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  completed: { label: 'Completed', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  cancelled: { label: 'Cancelled', className: 'bg-slate-100 text-slate-600 border-slate-200' },
};

export default function ProjectsPage() {
  const { client } = usePortal();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) return;
    getClientProjects(client.id).then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, [client]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Projects
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {projects.length} project{projects.length !== 1 ? 's' : ''} in total
        </p>
      </div>

      {projects.length === 0 ? (
        <Card className="py-12 text-center">
          <CardContent>
            <p className="text-slate-500">No projects found.</p>
            <p className="text-sm text-slate-400 mt-1">Projects will appear here once assigned to your account.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const statusCfg = projectStatusConfig[project.status];
            return (
              <Link key={project.id} href={`/portal/projects/${project.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer gap-4">
                  <CardHeader className="pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base font-semibold text-slate-900 leading-snug line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className={statusCfg.className}>
                        {statusCfg.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    {/* Progress */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-semibold text-slate-700">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    {/* Dates */}
                    {(project.start_date || project.deadline) && (
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays className="size-3.5 shrink-0" />
                        <span>
                          {formatDate(project.start_date)}
                          {project.start_date && project.deadline ? ' → ' : ''}
                          {formatDate(project.deadline)}
                        </span>
                      </div>
                    )}

                    {/* Budget */}
                    {project.budget != null && project.budget > 0 && (
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <DollarSign className="size-3.5 shrink-0" />
                        <span>Budget: {formatCurrency(project.budget)}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-sm font-medium text-[#115FC9]">
                      View details <ArrowRight className="size-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
