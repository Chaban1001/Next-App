'use client';

import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import { NavigationPaths } from '@/enums/nav';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

export const NavBar: FC = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.header__navBar}>
      <ul className={styles.header__menuList}>
        <li className={styles.listItem}>
          <Link
            style={{ color: pathname === NavigationPaths.HOME ? '#111' : '' }}
            className={styles.listLink}
            href={NavigationPaths.HOME}
          >
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            style={{ color: pathname === NavigationPaths.ABOUT ? '#111' : '' }}
            className={styles.listLink}
            href={NavigationPaths.ABOUT}
          >
            About
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            style={{ color: pathname === NavigationPaths.BLOG ? '#111' : '' }}
            className={styles.listLink}
            href={NavigationPaths.BLOG}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
