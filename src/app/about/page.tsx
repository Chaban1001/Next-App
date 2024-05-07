import { AboutNav } from '@/enums/nav';
import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next | About',
};

export default function About() {
  return (
    <div>
      <h1 className={styles.title}>Select Subitem</h1>
    </div>
  );
}
