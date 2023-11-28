import { NextRequest, NextResponse } from 'next/server';
import qs from 'qs';

type Props = {
  params: Params;
};

type Params = {
  category: string;
};

const TOKEN = process.env.API_TOKEN;
const URL = process.env.NEXT_PUBLIC_CMS_URL;

export async function GET(request: NextRequest, { params }: Props) {
  let { category } = params;

  const query = qs.stringify(
    {
      filters: {
        categories: {
          slug: {
            $eq: category,
          },
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
      tags: ['item', category],
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const res = await data.json();

  if (res.data.length === 0) return NextResponse.json({ error: 'Product not found' });
  return NextResponse.json(res);
}
