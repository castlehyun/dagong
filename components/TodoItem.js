import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';

const TodoItem = ({todo}) =>{
  const {id, text, checked} = todo;
return (<View className="TodoItem">
  <View className={`content ${checked ? "checked": ""}`}>
    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
    <View>{text}</View>
  </View>
</View>
);
};

export default TodoItem;