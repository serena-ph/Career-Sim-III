import Content from "../Components/Content";
import { useGetPostQuery } from "../reducers/PageAPI";

export default function AllPost(){
    const {data, error, isLoading} = useGetPostQuery();
    const [query, setQuery] = useState("");
    console.log(data)
    return(
        <>
        <input type="text" onChange={e => setQuery(e.target.value)}/>
        <Content>
            {isLoading? <h1>Loading</h1>: data.data.posts.map((i)=> 
           <Link> <h1 key={i.title}>{i.title} </h1> </Link>) } 
    
        </Content>
        </>
    )
}