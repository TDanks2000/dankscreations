import { FaMinus, FaPlus } from 'react-icons/fa6';
import styles from './styles.module.scss';

type Props = {
  max: number;
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export const Quantity: React.FC<Props> = ({ max, quantity, setQuantity }) => {
  const add = (value: number) => {
    if (value < 1) return setQuantity(1);
    if (value >= max) return setQuantity(max);
    return setQuantity(value);
  };

  return (
    <div className={styles.container}>
      <p>Quantity</p>
      <div className={styles.buttonContainer}>
        <div className={styles.left}>
          <button
            className={styles.button}
            onClick={() => add(quantity - 1)}
            disabled={quantity <= 1}
          >
            <FaMinus />
          </button>
        </div>

        <div className={styles.middle}>
          <input
            className={styles.input}
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = e.target.value;
              add(parseInt(value));
            }}
            min={1}
            max={1}
          />
        </div>

        <div className={styles.right}>
          <button
            className={styles.button}
            onClick={() => add(quantity + 1)}
            disabled={quantity >= max}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};
