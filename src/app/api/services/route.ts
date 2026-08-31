import { NextResponse } from 'next/server';
import { getAdaptedCategories } from '@/lib/data/services-adapter';

export const revalidate = 300; // cache for 5 minutes

export async function GET() {
  const categories = await getAdaptedCategories();
  return NextResponse.json(categories);
}
