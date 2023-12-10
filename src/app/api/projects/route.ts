import { NextResponse } from 'next/server';

import { filters, projects } from './data';

export async function GET() {
  return NextResponse.json({
    projects,
    filters,
  });
}
