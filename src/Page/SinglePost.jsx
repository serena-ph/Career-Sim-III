
import { useGetPostQuery } from "../reducers/PageAPI";
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SinglePost(){
  const { id } = useParams();
  const { data, error, isLoading } = useGetPostQuery();

  const post = data.data.posts.find(post => post._id === id);
  


  
    return (
       <div className="singlePost" >
        <h1>Title:{post.title}</h1>
				<h3>Description: {post.description}</h3>
				<h3>Price: {post.price}</h3>
				<h3>Location: {post.location}</h3>
				<h5>Created By: {post.author.username}</h5>
				<h6>Updated At: {post.updatedAt}</h6>
        <Link to={'/'}>Go Back Home</Link>
        </div>
 
    );
}