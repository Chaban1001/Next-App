export const getAllPosts = async () => {
  try {
    const response = await fetch('/api/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Unable to fetch posts ${error.message}`);
    }
  }
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);
  if (!response.ok) {
    throw new Error('Unable to fetch posts');
  }
  return response.json();
};
