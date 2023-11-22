import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface CategoryComponentProps {
  image: string | null;
  title: string;
  desc: string;
  slug: string;
}

const CategoryComponent: FunctionComponent<CategoryComponentProps> = ({ desc, image, title, slug }) => {
  return (
    <Link
      className={styles.container}
      href={`/category/${slug}`}
    >
      <div className={styles.image}>
        <Image
          src={image!}
          alt={title}
          width={500}
          height={500}
          draggable={false}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryComponent;
