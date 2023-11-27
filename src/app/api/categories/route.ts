import { NextRequest, NextResponse } from 'next/server';

const TOKEN = process.env.API_TOKEN;
const URL = process.env.NEXT_PUBLIC_CMS_URL;

export async function GET(request: NextRequest) {
  const url = `${URL}/api/categories?populate=*&pagination[pageSize]=5`;

  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    next: {
      revalidate: 3600,
      tags: ['categories'],
    },
  });

  const res = await data.json();

  return NextResponse.json(res);
}
