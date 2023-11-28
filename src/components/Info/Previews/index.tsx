'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { ImageModal } from '../../../modals';
import styles from './styles.module.scss';

type Props = {
  images: any[];
};

const CMS_URL = `https://cms.dankscreations.com`;
export const Previews = ({ images }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(images?.length >= 1 ? images[0] : null);

  const onClick = (index: number) => {
    setSelected(images[index]);
  };

  const prev = () => {
    const index = images.indexOf(selected);
    if (index === 0) return setSelected(images[images.length - 1]);
    setSelected(images[index - 1]);
  };

  const next = () => {
    const index = images.indexOf(selected);
    if (index === images.length - 1) return setSelected(images[0]);
    setSelected(images[index + 1]);
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.selectedContainer}
          onClick={() => {
            setIsOpen(true);
          }}
        >
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
            className={styles.forwardArrow}
            onClick={next}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <ImageModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        selectedImage={`${CMS_URL}${selected?.attributes?.url}`}
      />
    </>
  );
};
