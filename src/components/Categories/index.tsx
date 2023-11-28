import { NextPage } from 'next';
import CategoryComponent from './Category';
import styles from './styles.module.scss';

interface CategoriesComponentProps {}

const fetchCategories = async () => {
  const data = await fetch(`http://localhost:3000/api/categories`);
  const res = await data.json();

  return res;
};

const CMS_URL = `https://cms.dankscreations.com`;

const CategoriesComponent: NextPage<CategoriesComponentProps> = async () => {
  const data = await fetchCategories();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Browse by category</h2>
      <div className={styles.wrapper}>
        {data?.data?.map((item: any) => {
          const itemData = item?.attributes;
          const image = itemData.thumbnail?.data?.attributes?.url;

          return (
            <CategoryComponent
              key={item.id}
              title={itemData.title}
              desc={itemData.description}
              image={image ? `${CMS_URL}${image}` : null}
              slug={itemData.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesComponent;
