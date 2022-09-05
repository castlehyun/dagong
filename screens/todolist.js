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
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

const TodoList=({navigation})=>{
  const [hidePassword, setHidePassword] = useState(true);
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
                          onChangeText={handleChange('Todolist')  
                        }
                          onBlur={handleBlur('Todolist')
                          
                        }
                      />
                      <StyledButton2>
                        <ScheduleButtonText>
                            +
                        </ScheduleButtonText>
                    </StyledButton2>
                      </ScheduleFormArea>
                    
                      
                      <StyledFormArea>
                        <MyTextInput>
                            할 일 체크
                        </MyTextInput>
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



export default TodoList;