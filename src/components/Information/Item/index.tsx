import { FunctionComponent, ReactElement } from 'react';
import { IconType } from 'react-icons';
import styles from './styles.module.scss';

interface ItemProps {
  icon?: ReactElement<IconType>;
  title: string;
  description: string;
}

const Item: FunctionComponent<ItemProps> = ({ description, title, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Item;
