import { AboutNav } from '@/enums/nav';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '@/styles/page.module.scss';

type Props = {
  children: ReactNode;
};

export default function AboutLayout({ children }: Props) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <nav className={styles.about__navBar}>
        <ul className={styles.about__menu}>
          <li className={styles.about__listItem}>
            <Link
              style={{
                color: '#313131',
                fontWeight: 600,
                textDecoration: 'none',
              }}
              href={AboutNav.CONTACTS}
            >
              Contacts
            </Link>
          </li>
          <li className={styles.about__listItem}>
            <Link
              style={{
                color: '#313131',
                fontWeight: 600,
                textDecoration: 'none',
              }}
              href={AboutNav.TEAM}
            >
              Team
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
