import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

const careerSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(200),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email format'),
  phone: z.string().trim().max(30).default(''),
  portfolio: z.string().trim().max(500).default(''),
  position: z.string().trim().min(1, 'Position is required').max(200),
  introduction: z.string().trim().min(1, 'Introduction is required').max(5000),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Request body must be a JSON object.' }, { status: 400 });
  }

  const parsed = careerSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json({ error: firstIssue?.message ?? 'Validation failed.' }, { status: 422 });
  }

  const { name, email, phone, portfolio, position, introduction } = parsed.data;

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Service unavailable. Please try again later.' }, { status: 503 });
  }

  const { error } = await supabase
    .from('career_applications')
    .insert({ name, email, phone, portfolio, position, introduction });

  if (error) {
    console.error('[careers] Supabase insert error:', error.message);
    return NextResponse.json({ error: 'Failed to save application. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Application received.' }, { status: 201 });
}
