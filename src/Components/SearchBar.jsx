import React, {useState} from 'react';
import { useGetPostQuery } from '../reducers/PageAPI';


export default function SearchBar () {
    const [search, setSearch] = useState("");

return(
<div>  
    <label>Search</label>
    <input type="text" onChange ={e => setSearch(e.target.value)} />
</div>
)
}
