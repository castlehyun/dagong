import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import TodoListItem from './TodoListItem';

import React, {useState} from 'react';
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
    RightIcon,
    StyledButton,
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
              <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
              <PageTitle>Dagong</PageTitle>
              <SubTitle>할 일 리스트</SubTitle>

              <Formik
                  initialValues={{email:'',password:''}}
                  onSubmit={(values)=>{
                      console.log(values);
                      navigation.navigate("Welcome");
                  }}
              >
                  {({handleChange, handleBlur, handleSubmit, values})=>(
                  <StyledFormArea>
                      <MyTextInput
                          label="Todolist"
                          icon="heart"
                          placeholder="수학 공부 하기"
                          placeholderTextColor={darkLight}
                          onChangeText={handleChange('Todolist')}
                          onBlur={handleBlur('Todolist')}
                          value={values.Todolist}
                          secureTextEntry={hidePassword}
                          isPassword={true}
                          hidePassword={hidePassword}
                          setHidePassword={setHidePassword}
                      />
                      <MsgBox>...</MsgBox>
                      <StyledButton onPress={handleSubmit}>
                          <ButtonText>
                              할 일 등록
                          </ButtonText>
                      </StyledButton>
                      <StyledButton onPress={()=>navigation.navigate("TodoList")}>
                          <ButtonText>
                              할 일 확인
                          </ButtonText>
                      </StyledButton>
                      <Line />

                      {/*<ExtraView>
                          <ExtraText>아직 계정이 없으신가요?</ExtraText>
                          <TextLink onPress={()=>navigation.navigate("Signup")}>
                              <TextLinkContent>회원가입</TextLinkContent>
                          </TextLink>    
                  </ExtraView>*/}
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
          <StyledTextInput {...props} />
          {isPassword && (
              <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                  <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight}/>
              </RightIcon>
          )}
      </View>
  );
};



export default TodoList;