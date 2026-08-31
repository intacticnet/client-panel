import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Invalid email format'),
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

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json({ error: firstIssue?.message ?? 'Validation failed.' }, { status: 422 });
  }

  const { email } = parsed.data;

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Service unavailable. Please try again later.' }, { status: 503 });
  }

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert({ email });

  if (error) {
    console.error('[newsletter] Supabase insert error:', error.message);
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Subscribed.' }, { status: 201 });
}
