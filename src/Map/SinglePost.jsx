
import { useGetPostQuery } from "../reducers/PageAPI";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePost(){
    const { data, error, isLoading } = useGetPostQuery();
    const {_id} = useParams ().id
    const onepost = posts.data.posts.filter(
		(post) => post._id === _id
	)[0];

  
    return(
       <div className="singlePost" key={post.author._id} >
            <h1>{post.title}</h1>
				<h2>{post.description}</h2>
				<h3>Price: {post.price}</h3>
				<h3>Location: {post.location}</h3>
				<h5>Created By: {post.author.username}</h5>
				<h7>Updated At: {post.updatedAt}</h7>
        </div>
 
    )
}