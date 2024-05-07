import styles from '@/styles/header.module.scss';
import { FC } from 'react';
import { NavBar } from '@/components/NavBar/NavBar';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
};

export default Header;
