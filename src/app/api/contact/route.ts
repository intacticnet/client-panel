import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(200),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  company: z.string().trim().max(200).default(''),
  message: z.string().trim().min(1, 'Message is required').max(5000),
  services: z.array(z.string().max(200)).default([]),
  budget: z.string().trim().max(100).default(''),
});

export async function POST(request: NextRequest) {
  /* ── Reject non-POST or empty bodies ── */
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Request body must be valid JSON.' },
      { status: 400 },
    );
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json(
      { error: 'Request body must be a JSON object.' },
      { status: 400 },
    );
  }

  /* ── Validate with zod ── */
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { error: firstIssue?.message ?? 'Validation failed.' },
      { status: 422 },
    );
  }

  const { name, email, company, message, services, budget } = parsed.data;

  /* ── Persist to Supabase ── */
  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json(
      { error: 'Service unavailable. Please try again later.' },
      { status: 503 },
    );
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert({ name, email, company, message, services, budget });

  if (error) {
    console.error('[contact] Supabase insert error:', error.message);
    return NextResponse.json(
      { error: 'Failed to save submission. Please try again.' },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { success: true, message: 'Inquiry received.' },
    { status: 201 },
  );
}
