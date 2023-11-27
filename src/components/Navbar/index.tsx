import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

import { CiGrid42 } from 'react-icons/ci';
import { FaCartShopping, FaHeart, FaMagnifyingGlass, FaUser } from 'react-icons/fa6';
import NavLink from './Link';

import Image from 'next/image';

import Logo from '../../assets/images/logo-no-bg.png';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboveBar}>
        <div className={styles.warpper}>
          <div className={styles.aboveBarContainer}>
            <div className={styles.account}>
              <FaUser />
              <p>Account</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.warpper}>
        <div className={styles.logo}>
          <Image
            src={Logo}
            alt="danks creations logo"
            width={1000}
            height={500}
            draggable={false}
          />
        </div>

        {/*  SEARCH */}
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search here..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <FaMagnifyingGlass />
              Search
            </button>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.icon}>
            <FaHeart />
          </div>
          <div className={styles.icon}>
            <FaCartShopping />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.underBar}>
          <NavLink
            to="/"
            label="Categories"
            icon={<CiGrid42 />}
            style={'dropdown-button'}
          />
          <NavLink
            to="/"
            label="Home"
            style={'dropdown'}
          />
          <NavLink
            to="/"
            label="Shop"
            style={'dropdown'}
          />
          <NavLink
            to="/"
            label="Products"
            style={'dropdown'}
          />
          <NavLink
            to="/"
            label="Pages"
            style={'dropdown'}
          />
          <NavLink
            to="/"
            label="Contact"
            style={'default'}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
