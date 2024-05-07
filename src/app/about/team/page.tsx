import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next | Team',
};

export default function Team() {
  return <h1 className={styles.title}>Team</h1>;
}
