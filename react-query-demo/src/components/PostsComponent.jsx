import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    refetch,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    // React Query advanced settings
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts {isFetching && <small>Refreshing...</small>}</h2>
      <button onClick={refetch}>Refetch Posts</button>
      {data.map((post) => (
        <div key={post.id} style={{ marginBottom: '1rem' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
