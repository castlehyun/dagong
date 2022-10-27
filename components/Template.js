import React from "react";
import {
  View,
  Text,
} from 'react-native';

import TodoList from '../components/TodoList';

const Template=()=>{
  return(
    <Text>
      <Text>오늘의 할 일(0)</Text>
      <Text>투두리스트 넣을 곳</Text>      
    </Text>
  );
};

export default Template;