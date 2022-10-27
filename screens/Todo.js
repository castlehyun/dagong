import React, {useState} from "react";
import Template from '../components/Template';
import TodoList from "../components/TodoList";

const Todo=()=>{
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "할일 1",
            checked: true
        }
    ])
    return(
        <Template>
            <TodoList />
        </Template>
    );
};

export default Todo;