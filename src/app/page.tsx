import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next | Home'
}

export default function Home() {
  return <h1 className={styles.title}>Home</h1>;
}
