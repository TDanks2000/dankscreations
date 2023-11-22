import Link from 'next/link';
import { FunctionComponent, ReactElement } from 'react';
import styles from './styles.module.scss';

import { IconType } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa6';

type NavLinkProps = {
  to: string;
  label: string;
  style?: 'button' | 'default' | 'dropdown' | 'dropdown-button';
  icon?: ReactElement<IconType>;
} & (
  | {
      style: 'dropdown-button' | 'button';
      icon: IconType;
    }
  | {}
);

const NavLink: FunctionComponent<NavLinkProps> = ({ label, style = 'default', to, icon }) => {
  const isAButtonVarient = () => style === 'button' || style === 'dropdown-button';
  const isDropdownVarient = () => style === 'dropdown' || style === 'dropdown-button';

  return (
    <Link href={to}>
      <div className={isAButtonVarient() ? styles.button : styles.default}>
        {isAButtonVarient() && icon && icon}
        {label}
        {isDropdownVarient() && <FaChevronDown />}
      </div>
    </Link>
  );
};

export default NavLink;
