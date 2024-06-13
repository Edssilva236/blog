import axios from "axios"
import { useState, useEffect } from 'react'
import React from 'react'
import {Link} from "react-router-dom";
import "./Home.css"

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts");
        const data = response.data;
        setPosts(data);
        console.log(data)
      }
      catch(error){
        console.log(error)
      }
    }
  useEffect(()=> {
    getPosts()
  }, [])
  return (
    <div className="home">
      <h1>Ultimos posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (posts.map((post)=>(
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler mais</Link>
          </div>  
        ))
      )}
    </div>
  )
}

export default Home