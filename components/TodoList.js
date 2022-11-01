import React from "react";
import TodoItem from "./TodoItem";

const TodoList=({todos})=>{
  return (<Text>{todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
      ))}
    </Text>
  );
};

export default TodoList;