import blogFetch from"../Axios/config";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import React from 'react';

import "./Admin.css";

const Admin = () => {
    const [posts, setPosts] = useState([]);

    const getPosts= async () => {
        try {
            const response = await blogFetch.get("/posts");
            const data = response.data;

            setPosts(data);
       } catch (error){
        console.log(error)
       }
    };

    const deletePost = async (id) => {
        await blogFetch.delete(`/posts/${id}`);

        const filterePosts = posts.filter((posts) => posts.id !== id)

        setPosts(filterePosts)
    }
    useEffect(()=> {
        getPosts();
    }, [])
  return (
 <div className="admin">
  <h1>Gerenciar Posts</h1>
    {posts.length === 0 ? (<p>Carregando...</p>) : (
     posts.map((posts) => (
       <div className="post" key={posts.id}>
        <h2>{posts.title}</h2>
          <div className="actions">
           <Link className="btn edit-btn" to={`/posts/edit/${posts.id}`}>Editar</Link>
         <button 
        className="btn delete-btn"
        onClick={()=> deletePost(posts.id)}>Excluir</button>
    </div>
  </div>
            ))
        )}
    </div>
  )
}

export default Admin