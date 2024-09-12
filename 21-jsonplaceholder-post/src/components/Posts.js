import Post from './Post';
import './Post';
import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        res.json().then((posts) => {
          //   console.log(posts);
          setPosts(posts);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Posts</h1>
        <hr />
        <h1 className="post">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Posts</h1>
        <hr />
        <h1 className="post">Error: {error}</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}

export default Posts;
