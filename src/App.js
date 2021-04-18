import { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleclick = (id) =>
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  if (!todos || !todos.length) {
    return (
      <p className="nodata" style={{ textAlign: "center" }}>
        NO TODOS{" "}
      </p>
    );
  }
  return (
    <ul>
      {todos.map((todo) => (
        <div style={{ display: "flex" }}>
          <li className="listofdata" style={{ listStyle: "none" }}>
            <CloseIcon
              onClick={() => handleclick(todo.id)}
              style={{ marginRight: 20 }}
            >
              {" "}
            </CloseIcon>
            {todo.label}
          </li>
        </div>
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
      <TextField
        variant="outlined"
        placeholder="Let's start"
        value={Newtodo}
        onChange={handlechange}
        type="text"
        style={{
          marginLeft: 140,
          caretColor: "#CE3446",
        }}
      />
      <br></br>
      <Button
        variant="contained"
        color="primary"
        style={{
          marginLeft: 190,
          marginTop: 30,
          backgroundColor: "#CE3446",
          borderStyle: "double",
          borderWidth: "8px",
        }}
        onClick={handleclick}
      >
        {" "}
        add todo
      </Button>
    </>
  );
};

function App() {
  return (
    <div>
      <div className="App">
        <Grid container>
          <Grid item md={3}/>
          <Grid item md={5} xs={12}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/young-business-woman-working-on-todo-list-2644452-2206521.png" />
        </Grid>
        <Grid item md={4}/>
        </Grid>
      </div>
      <Grid container>
        <Grid item md={4} />
        <Grid item md={4} xs={12}>
          <div style={{borderWidth:"3px"}}>
          <Todos />
          <TodoInput />
          </div>
          <Grid item md={4} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
