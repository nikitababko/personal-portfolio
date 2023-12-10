import { NextResponse } from 'next/server';

import { cards, description } from './data';

export async function GET() {
  return NextResponse.json({
    description,
    cards,
  });
}
