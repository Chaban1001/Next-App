'use client';

import { PostSearch } from '@/components/PostSearch/PostSearch';
import Posts from '@/components/Posts/Posts';
import { getAllPosts } from '@/services/getPosts';
import styles from '@/styles/page.module.scss';
import { useEffect, useState } from 'react';

export type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
}
