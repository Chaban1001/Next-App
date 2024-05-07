import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next | Contacts',
};

export default function Contacts() {
  return <h1 className={styles.title}>Contacts</h1>;
}
