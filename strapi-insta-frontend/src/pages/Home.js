import { Link } from 'react-router-dom';

import Post from '../components/Post';
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
export default () => {
  const [posts, setPosts] = useState([]);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/posts', {
        // headers: {
        //   'Content-Type': 'application/json',
        //   Authorization: `Bearer ${user.jwt}`,
        // },
      });
      const data = await response.json();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className='Home'>
      {posts &&
        posts.map((post) => (
          <Link to={`/${post.id}`}>
            <Post
              likes={post.likes}
              description={post.description}
              url={post.image && post.image.url}
            />
          </Link>
        ))}
    </div>
  );
};
