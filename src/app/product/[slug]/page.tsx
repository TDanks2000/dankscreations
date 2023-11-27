import { NextPage } from 'next';
import { ProductPageContainer } from '../../../containers';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const fetchProduct = async (slug: string) => {
  const data = await fetch(`http://localhost:3000/api/items/${slug}`);
  const res = await data.json();

  return res;
};

// TODO: Implement product page
const ProductPage: NextPage<ProductPageProps> = async ({ params: { slug } }) => {
  const data = await fetchProduct(slug);

  return <ProductPageContainer data={data} />;
};

export default ProductPage;
