'use client';

import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import { usePathname } from 'next/navigation';

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

type NavLinks = {
  navLinks: NavLink[];
};

export const NavBar = ({ navLinks }: NavLinks) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href} className={styles.menu__listItem}>
            <Link
              className={isActive ? styles.active : styles.menu__listLink}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </>
  );
};
