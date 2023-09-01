import { useState, useEffect } from 'react'
import Post from './components/Post';
import Form from './components/Form';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3333/api/posts');
    const data = await response.json();
    console.log(data);
    setPosts(data);
  }

  const createPost = async (post) => {
    try {
      const response = await fetch('http://localhost:3333/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      console.log(data);
      setPosts([...posts, data]);
  }
  catch (error) {
    console.log(error);
  }
  }

  useEffect(() => {
    getPosts();

  },[]);

  return (
    <>
      <h1>Béticos del Norte</h1>
      <Form onSubmit={createPost}/>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default App
