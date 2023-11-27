'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import styles from './styles.module.scss';

type Props = {
  images: any[];
};

const CMS_URL = `https://cms.dankscreations.com`;
export const Previews = ({ images }: Props) => {
  const [selected, setSelected] = useState(images?.length >= 1 ? images[0] : null);

  const onClick = (index: number) => {
    setSelected(images[index]);
  };

  const prev = () => {
    const index = images.indexOf(selected);
    if (index === 0) return;
    setSelected(images[index - 1]);
  };

  const next = () => {
    const index = images.indexOf(selected);
    if (index === images.length - 1) return;
    setSelected(images[index + 1]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedContainer}>
        <Image
          src={`${CMS_URL}${selected?.attributes?.url}`}
          alt={selected?.name}
          width={500}
          height={500}
          priority={true}
          draggable={false}
        />
      </div>
      <div className={styles.previewsContainer}>
        <button
          disabled={images?.length === 1}
          className={styles.backArrow}
          onClick={prev}
        >
          <FaChevronLeft />
        </button>
        <div className={styles.previewWrapper}>
          {images?.map((item: any) => {
            return (
              <div
                className={`${styles.previewItem} ${selected?.id === item?.id ? styles.previewItemActive : ''}`}
                key={item?.id}
                onClick={() => onClick(images.indexOf(item))}
              >
                <Image
                  src={`${CMS_URL}${item?.attributes?.url}`}
                  alt={item?.name}
                  width={500}
                  height={500}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
        <button
          disabled={images?.length === 1}
          className={styles.forwardArrow}
          onClick={next}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
