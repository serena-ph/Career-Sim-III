
import { useGetPostQuery } from "../reducers/PageAPI";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";

export default function SinglePost(){
    const { data, error, isLoading } = useGetPostQuery();
    const {_id} = useParams ();
    console.log()
  
    return(
       <div className="singlePost">
            {isLoading? <h1>Loading</h1>: data.data.posts.map((i)=> 
                <h1 key={i._id}>{_id}</h1>) }
        </div>
 
    )
}