import { NextRequest, NextResponse } from 'next/server';

type Props = {
  params: Params;
};

type Params = {
  slug: string;
};

const TOKEN = process.env.API_TOKEN;
const URL = process.env.NEXT_PUBLIC_CMS_URL;

export async function GET(request: NextRequest, { params }: Props) {
  const { slug } = params;
  const url = `${URL}/api/products?populate=*&filters=[slug][$eq]=${slug}`;

  const data = await fetch(url, {
    next: {
      revalidate: 3600,
      tags: ['item', slug],
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const res = await data.json();

  if (res.data.length === 0) return NextResponse.json({ error: 'Product not found' });
  return NextResponse.json(res.data[0]);
}
