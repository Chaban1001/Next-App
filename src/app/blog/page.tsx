import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next | Blog',
};

type Post = {
  id: number;
  title: string;
  body: string;
};

const getPosts = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=20',
      {
        next: { revalidate: 60 },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className={styles.title}>Blog</h1>
      <ol>
        {posts.map((post: Post) => (
          <li style={{ fontSize: 16, listStyle: 'disc' }} key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
