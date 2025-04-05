import React from "react";
import { useQuery } from "react-query";

// Function to fetch data from the API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const PostsComponent = () => {
  // Using the useQuery hook to fetch the posts
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts", 
    fetchPosts,
    {
      cacheTime: 5000,
      staleTime: 10000,
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  );

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
