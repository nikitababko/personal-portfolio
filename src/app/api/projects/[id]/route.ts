import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { projects } from '../data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const projectId = params.id;

  const getProject = () => {
    return projects.filter((project) => {
      return project.id === projectId;
    });
  };

  return NextResponse.json(getProject().at(0));
}
