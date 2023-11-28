import { ItemCard } from '../../components';
import styles from './styles.module.scss';

type Props = {
  data: any;
  title: string;
};

export const CategoryPageContainer: React.FC<Props> = ({ data, title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title.replaceAll('-', ' ')} Page</h1>
      <div className={styles.itemsWrapper}>
        {data.map((item: any) => {
          return (
            <ItemCard
              key={`category-item-${item?.id}`}
              data={item?.attributes}
            />
          );
        })}
      </div>
    </div>
  );
};
