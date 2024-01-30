import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logoDark from '../../assets/svg/logo-light.svg'
import styles from './header.module.scss';

const Header = () => {
  const menuItems = [
    { label: 'Home', value: '/home' },
    { label: 'Company', value: '/', subItems: [
      { label: 'About Us', value: '/about-us' },
      { label: 'Career', value: '/career' },
      { label: 'Services', value: '/services' },
    ]},
    { label: 'Blog', value: '/blog' },
    { label: 'Contact Us', value: '/contact' },
  ];

  const menuRender = (items) => {
    return (
      <ul className={styles['c-main-header-menu']}>
        {items.map((item, index) => (
          <li key={index} className={styles['c-main-header-menu-item']}>
            {item.subItems ? (
              // Render dropdown menu if there are subItems
              <>
                <span className={styles['menu-item--top-level']}>{item.label}</span>
                <ul className={styles['c-main-header-sub-menu']}>
                  {menuRender(item.subItems)}
                </ul>
              </>
            ) : (
              // Render regular menu item
              <Link to={item.value}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
    <div>

      <div className={styles['c-sub-header-container']}>
        <div className={styles['c-sub-header-wrapper']}>
          <div className={styles['c-sub-header-contact-info-wrapper']}>
            <p className={styles['c-sub-header-contact']}>45544545454</p>
            <p className={styles['c-sub-header-email']}>info@corpos.com</p>
          </div>
          <div className={styles['c-sub-header-info-social-icon-wrapper']}>
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
      <div className={styles['c-main-header-wrapper']}>
        <img className={styles['c-main-header-logo']} src={logoDark} alt="" />
        <nav className={styles['c-main-header-wrapper-nav']}>
          {menuRender(menuItems)}
        </nav>
      </div>
    </div>

    </>
  );
};

export default Header;
