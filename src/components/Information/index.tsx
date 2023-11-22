import { FunctionComponent } from 'react';
import { BsBox2 } from 'react-icons/bs';
import { PiCreditCard, PiMedal, PiTruck } from 'react-icons/pi';
import Item from './Item';
import styles from './styles.module.scss';

interface InformationComponentProps {}

const InformationComponent: FunctionComponent<InformationComponentProps> = () => {
  return (
    <div className={styles.container}>
      <Item
        key="return_info"
        icon={<BsBox2 />}
        title={'90 days return'}
        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '}
      />
      <Item
        key="delivery_info"
        icon={<PiTruck />}
        title={'Free Delivery'}
        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '}
      />
      <Item
        key="payments_info"
        icon={<PiCreditCard />}
        title={'Secure Payments'}
        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '}
      />
      <Item
        key="waranty_info"
        icon={<PiMedal />}
        title={'100% Free Waranty'}
        description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '}
      />
    </div>
  );
};

export default InformationComponent;
