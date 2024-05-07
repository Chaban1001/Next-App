import { Post } from '@/app/blog/page';
import Link from 'next/link';

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <ol>
      {posts.map((post: Post) => (
        <li style={{ fontSize: 16, listStyle: 'disc' }} key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ol>
  );
}
