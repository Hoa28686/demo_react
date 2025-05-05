import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(setTodos) //shorthand for then(data => setTodos(data))
      .catch(console.error)
      .finally(() => setLoading(false));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers) //shorthand for then(data => setUsers(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  console.log("todo: ", todos);
  console.log("users: ", users);

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
      {users.map((u) => (
        <div key={u.id}>
          <h2>{u.name}</h2>
          <h3>Todos: </h3>
          {todos
            .filter((t) => t.userId === u.id)
            .sort((a, b) => a.completed - b.completed)
            .map((t) => {
              if (t.completed) {
                return <p>{t.title} ✅ </p>;
              } else {
                return <p>{t.title} ❌ </p>;
              }
            })}
        </div>
      ))}
    </div>
  );
};

export default Todos;
