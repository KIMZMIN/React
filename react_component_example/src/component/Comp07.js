// Event Test
import { useState, useEffect } from "react";

function Comp(){

    let [posts, setPosts] = useState([]);
    // const callAPI = ()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => {console.log(json); setPosts(json);})
    // }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {console.log(json); setPosts(json);})
    },[])

    return(<>
    <h3>🥺Comp07 </h3>
    {posts.map(post => 
        <div key={post.id}>
            <span>{post.id}</span>
            <span>{post.title}</span>
        </div>)}
        </>);
}

export default Comp;