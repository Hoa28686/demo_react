import { useEffect, useState } from "react";

export const Example = () => {
    const [posts,setPosts]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(setPosts) //shorthand for then(data => setPosts(data))
        .catch(console.error)
        .finally(()=> setLoading(false));
    },[]);
    console.log('post: ',posts);
    
    // dependency array: empty [] so it only runs once, 

    // infinite loops
    // const fetchPosts= async () =>{
    //     const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const data=await response.json();
    //     setPosts(data);
    //     setLoading(false);
    //     console.log('post');
    // }
    // fetchPosts(); //always run on re-render
  return loading?
  (<div>Loading...</div>)
  :(
    <div>
        {posts.map(p => <p key={p.id} >- {p.title} </p> )}
    </div>
  )
}
