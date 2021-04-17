import { useState } from "react";
import "./styles.css";
import {useDispatch, useSelector} from 'react-redux'

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleclick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  if (!todos || !todos.length) {
    return <p>NO TODOS </p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {" "}
      {() => handleclick(todo.id)} {todo.label}{" "}
        </li>
      ))}
    </ul>
  );
};
const TodoInput = () => {
  const dispatch = useDispatch();
  const [Newtodo, setNewtodo] = useState();
  const handlechange = (event) => setNewtodo(event.target.value);
  const handleclick = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: Newtodo,
        id: Math.ceil(Math.random() * 100),
      },
    });

  return (
    <>
      <input value={Newtodo} onChange={handlechange} type="text" />
      <button onClick={handleclick}> add todo</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
