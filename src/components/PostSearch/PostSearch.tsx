'use client';

import { Post } from '@/app/blog/page';
import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';

interface Props {
  onSearch: (value: Post[]) => void;
}

export const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <label htmlFor='search'>
        <input
          type='search'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          name='search'
          id='search'
          placeholder='Search post'
        />
      </label>
      <button type='submit'>Search</button>
    </form>
  );
};
