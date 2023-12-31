import { NextRequest, NextResponse } from 'next/server';
import QueryString from 'qs';

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

  const query = QueryString.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  );

  const url = `${URL}/api/products?populate=*&${query}`;

  const data = await fetch(url, {
    next: {
      revalidate: 1,
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
