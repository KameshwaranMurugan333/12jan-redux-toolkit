import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoToStore } from "../../redux/slices";

export const AddTodo = () => {

    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);

    const [title, setTitle] = React.useState();
    const [email, setEmail] = React.useState();
    const [commt, setCommt] = React.useState();

    const addTodo = () => {
        dispatch(addTodoToStore({ id: 1, title, email, commt }));
        setTitle("");
        setEmail("");
        setCommt("");
    }

    return <div>
        {/* Add Todo */}
        <input value={title} type={"text"} placeholder={"Todo Title"} onChange={(e) => setTitle(e.target.value)} />
        <input value={email} type={"text"} placeholder={"Todo Email"} onChange={(e) => setEmail(e.target.value)} />
        <input value={commt} type={"text"} placeholder={"Todo Comment"} onChange={(e) => setCommt(e.target.value)} />

        <button onClick={addTodo}>Add Todo</button>

        {/* Listing Todo */}
        <h6>All Todos</h6>
        <p>{JSON.stringify(todos)}</p>
    </div>
}