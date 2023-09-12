import Content from "../Components/Content";
import { useGetPostQuery } from "../reducers/PageAPI";
import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AllPost(){
    const {data, error, isLoading} = useGetPostQuery();
    const [input,setInput] = useState("");

    return(
        
        <>

        <Content>
        <input type="text"  placeholder='Search for a post' onChange ={(e) => setInput(e.target.value)} />
            {isLoading? <h1>Loading</h1>:input.trim().length>0? data.data.posts.filter(post=>post.title.includes(input)).map((post)=> 
            <Link to ={`/single/${post._id}`}><h1 key={post.title}>{post.title} </h1></Link>)
            :data.data.posts.map((post)=> 
            <Link to ={`/single/${post._id}`}><h1 key={post.title}>{post.title} </h1></Link>  
            
            ) } 
    
        </Content>
        </>
    )
}