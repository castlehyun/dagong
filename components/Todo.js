import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
  //undefined is not an object(evaluating 'todos.map')
  todo={
    id: null,
    pw: null
  };
  //todo 변수 만들어야 하는지..

  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;