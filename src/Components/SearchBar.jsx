import {React, useState} from 'react';
import { useGetPostQuery } from '../reducers/PageAPI';


export default function SearchBar () {
    const [search, setSearch] = useState("");
    const {data, error, isLoading} = useGetPostQuery();
   
return(
<div>  
    <input type="text"  placeholder='Search for a post'
    value= {search} onChange ={(e) => setSearch(e.target.value)} />
    

</div>
)
}
