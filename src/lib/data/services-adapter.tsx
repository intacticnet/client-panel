/**
 * Services data adapter — transforms Supabase rows into component-compatible shapes.
 * Server-only module (imports from supabase/server).
 *
 * Client components should import types + resolveIcon from './icons' instead.
 */
import { type ServiceItem, type CategoryItem } from '@/lib/data/icons';

// ─── Supabase row → ServiceItem ────────────────────────────────────

function adaptService(row: Record<string, any>): ServiceItem {
  const cat = row.serviceCategories ?? {};
  const catSlug = cat.slug ?? row.categoryId ?? '';

  const features = Array.isArray(row.features)
    ? row.features.map((f: Record<string, any>) => ({
        title: f.title ?? '',
        description: f.description ?? '',
        iconName: f.iconName ?? undefined,
      }))
    : [];

  const process = Array.isArray(row.process)
    ? row.process.map((p: Record<string, any>) => ({
        step: Number(p.step) || 0,
        title: p.title ?? '',
        description: p.description ?? '',
      }))
    : [];

  return {
    slug: row.slug ?? '',
    title: row.title ?? '',
    shortTitle: row.shortTitle ?? '',
    categoryId: catSlug,
    categoryTitle: cat.title ?? '',
    tagName: cat.slug ?? '',
    icon: cat.iconName ?? 'Code',
    tagline: row.tagline ?? '',
    description: row.description ?? '',
    heroDescription: row.heroDescription ?? '',
    features,
    process,
    benefits: Array.isArray(row.benefits) ? row.benefits : [],
    technologies: Array.isArray(row.technologies) ? row.technologies : [],
  };
}

// ── Public fetch functions ─────────────────────────────────────────────

export async function getAdaptedAllServices(): Promise<ServiceItem[]> {
  try {
    const { getAllServices } = await import('@/lib/data/fetch');
    const rows = await getAllServices() as Record<string, any>[];
    return rows.map(adaptService);
  } catch {
    return [];
  }
}

export async function getAdaptedServiceBySlug(slug: string): Promise<ServiceItem | null> {
  try {
    const { getServiceBySlug } = await import('@/lib/data/fetch');
    const row = await getServiceBySlug(slug) as Record<string, any> | null;
    return row ? adaptService(row) : null;
  } catch {
    return null;
  }
}

export async function getAdaptedCategories(): Promise<CategoryItem[]> {
  try {
    const { getAllServices, getAllServiceCategories } = await import('@/lib/data/fetch');
    const [serviceRows, categoryRows] = await Promise.all([
      getAllServices() as Promise<Record<string, any>[]>,
      getAllServiceCategories() as Promise<Record<string, any>[]>,
    ]);

    const grouped = new Map<string, ServiceItem[]>();
    for (const row of serviceRows) {
      const svc = adaptService(row);
      const key = svc.categoryId;
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key)!.push(svc);
    }

    return categoryRows.map((cat: Record<string, any>) => ({
      id: cat.slug ?? '',
      icon: cat.iconName ?? 'Code',
      title: cat.title ?? '',
      shortTitle: cat.shortTitle ?? '',
      tagline: cat.tagline ?? '',
      color: cat.color ?? '#115FC9',
      services: grouped.get(cat.slug) ?? [],
    }));
  } catch {
    return [];
  }
}
