import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface ItemCardProps {
  data: any;
}

const CMS_URL = `https://cms.dankscreations.com`;
const ItemCard: FunctionComponent<ItemCardProps> = ({ data }) => {
  return (
    <Link
      className={styles.container}
      href={`/product/${data?.slug}`}
    >
      <div className={styles.top}>
        <Image
          src={`${CMS_URL}${data?.thumbnail?.data?.attributes?.url}`}
          alt={data.title}
          width={500}
          height={500}
          draggable={false}
        />
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{data?.title}</h1>
        <h1 className={styles.price}>£{data?.price}</h1>
      </div>
    </Link>
  );
};

export default ItemCard;
