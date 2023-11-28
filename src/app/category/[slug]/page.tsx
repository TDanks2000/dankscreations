import { FunctionComponent } from 'react';
import { CategoryPageContainer } from '../../../containers';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const fetchCategoryData = async (slug: string) => {
  const data = await fetch(`http://localhost:3000/api/items/category/${slug}`);
  const res = await data.json();

  return res;
};

// TODO: Implement category page
const CategoryPage: FunctionComponent<CategoryPageProps> = async ({ params: { slug } }) => {
  const data = await fetchCategoryData(slug);
  return (
    <CategoryPageContainer
      data={data?.data}
      title={slug}
    />
  );
};

export default CategoryPage;
