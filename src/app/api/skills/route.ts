import { NextResponse } from 'next/server';

import { content, titles } from './data';

export async function GET() {
  return NextResponse.json({
    titles,
    content,
  });
}
