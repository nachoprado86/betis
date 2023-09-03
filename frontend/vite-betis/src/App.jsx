import { useState, useEffect } from 'react'
import Post from './components/Post';
import Form from './components/Form';
import './App.css'
import NuestraPena from './NuestraPena';
import Vascos from './Vascos';
import Mundo from './Mundo';
import Contacto from './Contacto';
import Header from './components/Header';

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
    
    <section>
<Header />
     <div className="App">
      <h1>BLOG: Haciendo Betis en Euskadi (Béticos del Norte).</h1>
      <Form onSubmit={createPost}/>
     
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
     </div>
     <div className="NuestraPena">
      <NuestraPena/>
     </div>
     <div className="Vascos">
      <Vascos/>
     </div>
     <div className="Mundo">
      <Mundo/>
     </div>
     <div className="Contacto">
      <Contacto/>
     </div>
    </section>
  )
}

export default App
