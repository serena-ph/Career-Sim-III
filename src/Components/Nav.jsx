import { Link } from "react-router-dom"
export default function Nav (){
    return(
        <nav>
            <Link to ={"/"}>Home</Link>
            <Link to ={"/posts"}>All Posts</Link>
            <Link to ={"/profile"}>Profile</Link>
        </nav>

    )
}