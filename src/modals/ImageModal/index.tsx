import Image from 'next/image';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import Modal from 'react-modal';
import styles from './styles.module.scss';

interface ImageModalProps {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;

  selectedImage: string;
}

const ImageModal: FunctionComponent<ImageModalProps> = ({ modalIsOpen, setIsOpen, selectedImage }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const onAfterOpen = () => {
    document.body.style.overflow = 'hidden';
  };

  const onAfterClose = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
    >
      <Image
        src={selectedImage}
        alt="Selected Image"
        fill
        priority={true}
      />
    </Modal>
  );
};

export default ImageModal;
