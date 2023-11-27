'use client';
import { useEffect, useState } from 'react';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import TextareaAutosize from 'react-textarea-autosize';
import { Info } from '../../components';
import styles from './styles.module.scss';

type Props = {
  data: any;
};

export const ProductPageContainer: React.FC<Props> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const isCustomisable = data?.attributes?.isCustomisable as boolean;
  const maxLength = 256;
  const [currentMaxLength, setCurrentMaxLength] = useState(256);
  const [personaliseText, setPersonaliseText] = useState('');

  useEffect(() => {
    const length = personaliseText?.length ?? 0;
    setCurrentMaxLength(maxLength - length);
  }, [personaliseText]);

  return (
    <div className={styles.container}>
      <Info.Previews images={data?.attributes?.previews?.data} />
      <div className={styles.right}>
        <h2 className={styles.title}>{data?.attributes?.title}</h2>
        <h2 className={styles.price}>£{data?.attributes?.price?.toFixed(2)}</h2>
        <Info.Quantity
          max={data?.attributes?.max_quantity}
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <div className={styles.buyContainer}>
          <button className={styles.buyButton}>
            <FaCartShopping />
            <p>Add to basket</p>
          </button>
          <button className={styles.favButton}>
            <FaRegHeart />
          </button>
        </div>

        <div className={styles.product_details}>
          <p className={styles.title}>Product Details:</p>

          {/* <p className={styles.product_details_desc}>{data?.attributes?.description}</p> */}
          <p className={styles.product_details_desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ab excepturi officia facilis totam! Impedit
            quos reiciendis nostrum quisquam culpa error esse officiis iure officia ratione. Corrupti nihil asperiores
            suscipit! Magni, in accusamus. Excepturi, optio at cum quae ipsa nobis aspernatur itaque fugiat beatae esse
            corrupti minima expedita consectetur porro sed pariatur velit aperiam molestiae, est fugit dolore voluptates
            dolorum.
          </p>
        </div>

        {isCustomisable && (
          <div className={styles.personaliseContainer}>
            <p className={styles.title}>Personalise:</p>
            <div className={styles.personaliseText}>{data?.attributes?.customisationText}</div>
            <TextareaAutosize
              className={styles.personaliseTextarea}
              name="personalise"
              id="personalise"
              minRows={3}
              value={personaliseText}
              onChange={(e) => {
                const value = e.target.value;
                setPersonaliseText(value);
              }}
              maxLength={maxLength}
            />
            <div className={styles.maxLength}>{currentMaxLength}</div>
          </div>
        )}
      </div>
    </div>
  );
};
