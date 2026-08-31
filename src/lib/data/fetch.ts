import { createClient } from '@/utils/supabase/server';

// ─── camelCase Transformation Helpers ──────────────────────────────────────

function toCamelCase(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = key.replace(/_([a-zA-Z])/g, (_, c) => c.toUpperCase());
    // Recursively transform nested objects and arrays
    if (Array.isArray(value)) {
      result[camelKey] = value.map((v) =>
        v !== null && typeof v === 'object' && !Array.isArray(v)
          ? toCamelCase(v as Record<string, any>)
          : v,
      );
    } else if (value !== null && typeof value === 'object') {
      result[camelKey] = toCamelCase(value as Record<string, any>);
    } else {
      result[camelKey] = value;
    }
  }
  return result;
}

function transformRow<T>(row: Record<string, any>): T {
  return toCamelCase(row) as T;
}

function transformRows<T>(rows: Record<string, any>[]): T[] {
  return rows.map(transformRow<T>);
}

// ─── Service Categories ─────────────────────────────────────────────────────

export async function getAllServiceCategories() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('service_categories')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

// ─── Services ───────────────────────────────────────────────────────────────

export async function getAllServices() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*, service_categories(*)')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*, service_categories(*)')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) return null;
    return transformRow(data);
  } catch {
    return null;
  }
}

// ─── Products ───────────────────────────────────────────────────────────────

export async function getAllProducts() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) return null;
    return transformRow(data);
  } catch {
    return null;
  }
}

// ─── Industries ─────────────────────────────────────────────────────────────

export async function getAllIndustries() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('industries')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

export async function getIndustryBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('industries')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) return null;
    return transformRow(data);
  } catch {
    return null;
  }
}

// ─── Case Studies ───────────────────────────────────────────────────────────

export async function getAllCaseStudies() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !data) return null;
    return transformRow(data);
  } catch {
    return null;
  }
}

// ─── Blog Posts ─────────────────────────────────────────────────────────────

export async function getPublishedBlogPosts(limit?: number) {
  try {
    const supabase = await createClient();
    let query = supabase
      .from('blog_posts')
      .select('*, authors(*), blog_categories(*)')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*, authors(*), blog_categories(*)')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) return null;
    return transformRow(data);
  } catch {
    return null;
  }
}

export async function getFeaturedBlogPosts(count: number) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*, authors(*), blog_categories(*)')
      .eq('status', 'published')
      .eq('is_featured', true)
      .order('published_at', { ascending: false })
      .limit(count);

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

// ─── Authors ────────────────────────────────────────────────────────────────

export async function getAllAuthors() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('authors')
      .select('*')
      .eq('is_active', true)
      .order('name', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

export async function getAuthorBySlug(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('authors')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (error || !data) return null;
    return transformRow(data);
  } catch {
    return null;
  }
}

// ─── Team Members ───────────────────────────────────────────────────────────

export async function getAllTeamMembers() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return transformRows(data);
  } catch {
    return [];
  }
}

// ─── Site Settings ──────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<Record<string, string>> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('site_settings')
      .select('key, value');

    if (error || !data) return {};

    const settings: Record<string, string> = {};
    for (const row of data) {
      settings[row.key] = row.value;
    }
    return settings;
  } catch {
    return {};
  }
}
