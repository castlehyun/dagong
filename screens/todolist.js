/*

import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';


import {View} from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    ScheduleTextInput,
    RightIcon,
    StyledButton,
    StyledButton2,
    ScheduleButtonText,
    ScheduleButton,
    ScheduleFormArea,
    ButtonText,
    Colors,
    MsgBox,
    ScheduleTextBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

const TodoList=({navigation})=>{
  state={
    text:'',
    inputText:''
  }

  //할 일 등록
  submitBtn=()=>{
    this.setState({text:this.state.inputText});}  
    
  const [hidePassword, setHidePassword] = useState(true);
  //todos:{id:Number, textValue: string, checked: boolean} 
  const [todos, setTodos]=useState([]);   //할 일 체크 여부를 위한 배열

  const addTodo = text =>{
    setTodos([
      ...todos,
      {id: Math.random().toString(),textValue:text, checked: false},
    ]);
  };
  //check여부 = 할 일 수행 여부
  //id는 랜덤




  return (
      <StyledContainer>
          <StatusBar style="dark" />
          <InnerContainer>
          <PageTitle>Dagong</PageTitle>
              <SubTitle>할 일 리스트</SubTitle>

              <Formik
                  onSubmit={(values)=>{
                      console.log(values);
                      navigation.navigate("Welcome");
                  }}
              >
                  {({handleChange, handleBlur, handleSubmit, values})=>(
                  <StyledFormArea>
                    <ScheduleFormArea>
                      <MyTextInput
                          label="Todolist"
                          icon="heart"
                          placeholder="수학 공부 하기"
                          placeholderTextColor={darkLight}
                          onChangeText={(text)=>{this.setState({inputText: text})}}
                          onBlur={handleBlur('Todolist')
                          
                        }
                      />
                      <StyledButton2 onPress={this.submitBtn}>
                        <ScheduleButtonText>
                            +
                        </ScheduleButtonText>
                    </StyledButton2>
                      </ScheduleFormArea>
                    <StyledFormArea>
                      <MsgBox>
                      </MsgBox>
                      <MsgBox>
                        
                      </MsgBox>
                      <ScheduleTextBox>
                        
                      </ScheduleTextBox>


                      </StyledFormArea>
                      
                  </StyledFormArea>
                  


                  )}
              </Formik>

          </InnerContainer>
      </StyledContainer>
      
  );
};

const MyTextInput=({label, icon, isPassword,hidePassword,setHidePassword, ...props})=>{
  return (
      <View>
          <LeftIcon>
              <Octicons name={icon} size={30} color={brand}/>
          </LeftIcon>
          <StyledInputLabel>{label}</StyledInputLabel>
          <ScheduleTextInput {...props} />
          {isPassword && (
              <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                  <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight}/>
              </RightIcon>
          )}
      </View>
  );
};

*/

import React, {useState} from 'react';
import TodoList from '../components/Todo';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import TodoInsert from '../components/TodoInsert';

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Hello Todolist</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TodoList;