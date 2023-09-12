import Content from "../Components/Content";
import { useGetPostQuery } from "../reducers/PageAPI";
import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";

export default function AllPost(){
    const {data, error, isLoading} = useGetPostQuery();

    return(
        
        <>

        <Content>
            <input type={"text"} onChange={(event)=>setInput(event.target.value)}/>
            {isLoading? <h1>Loading</h1>:
             data.data.posts.map((post)=> 
            <Link to ={`/single/${post._id}`}><h1 key={post.title}>{post.title} </h1></Link> ) } 
    
        </Content>
        </>
    )
}