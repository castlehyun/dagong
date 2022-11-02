import React from "react";
import {
  View,
  Text,
} from 'react-native';

import TodoList from '../components/TodoList';

const Template=()=>{
  return(
    <View>
      <Text>오늘의 할 일(0)</Text>
      <Text>투두리스트 넣을 곳</Text>  
      <Text>어떻게 넣지 배열을</Text> 
        
    </View>
  );
};

export default Template;