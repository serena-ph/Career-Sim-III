import Content from "../Components/Content";
import { useGetPostQuery } from "../reducers/PageAPI";
import SinglePost from "./SinglePost";

export default function AllPost(){
    const {data, error, isLoading} = useGetPostQuery();
    return(
        
        <>

        <Content>
            {isLoading? <h1>Loading</h1>: data.data.posts.map((i)=> 
            <h1 key={i.title}>{i.title} </h1> ) } 
    
        </Content>
        </>
    )
}