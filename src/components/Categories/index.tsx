'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import CategoryComponent from './Category';
import styles from './styles.module.scss';

interface CategoriesComponentProps {}

const CMS_URL = `https://cms.dankscreations.com`;
const CategoriesComponent: FunctionComponent<CategoriesComponentProps> = () => {
  const [data, setData] = useState<any>([]);
  const [pending, setPending] = useState(true);

  const fetcher = async () => {
    const data = await fetch('/api/categories');
    const res = await data.json();
    setData(res);
    setPending(false);
  };

  useEffect(() => {
    fetcher();
    return () => {
      setData([]);
      setPending(true);
    };
  }, []);

  if (pending) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Browse by categories</h2>
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
