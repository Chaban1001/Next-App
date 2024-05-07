import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const headersList = headers();
  const type = headersList.get('Content-Type');
  const id = params.id;
  const cookie = cookies();
  const cookiesType = cookie.get('Cookie_1')?.value;
  return NextResponse.json({ id, type, cookiesType });
}
