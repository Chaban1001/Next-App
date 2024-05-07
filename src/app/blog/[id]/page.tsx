import styles from '@/styles/page.module.scss';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export const getPosts = async (id: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: {
          revalidate: 60,
        },
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

 async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPosts(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPosts(id);
  return (
    <div>
      <h1 className={styles.title}>Post {id}</h1>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}
