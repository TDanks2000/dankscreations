import { FunctionComponent } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import styles from './styles.module.scss';

interface HeroComponentProps {}

const HeroComponent: FunctionComponent<HeroComponentProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.new_arrivals}>New Arrivals</h2>
        <h1 className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <button className={styles.button}>
          Shop Now
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default HeroComponent;
