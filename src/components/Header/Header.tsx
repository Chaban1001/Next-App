import styles from '@/styles/header.module.scss';
import { FC } from 'react';
import { NavBar, NavLink } from '@/components/NavBar/NavBar';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__headerNav}>
        <ul className={styles.menu}>
          <NavBar navLinks={navLinks} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
