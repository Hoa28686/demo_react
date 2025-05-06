import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setPosts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  console.log("post: ", posts);

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
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {posts.map((p) => (
        <p key={p.id}>- {p.title} </p>
      ))}
    </div>
  );
};

export default Axios;
