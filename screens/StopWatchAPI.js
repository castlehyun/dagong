import React, { Component, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {StatusBar} from 'expo-status-bar';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {
  Text_TIMER,
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
  Button_timer,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from './../components/styles';

const StopWatchAPI = () => {

  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState(false);

  toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  }

  resetStopwatch = () => {
    setStart(false);
    setReset(true);
  }

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
          <PageTitle>Timer</PageTitle>
          <SubTitle>현재 공부 시간</SubTitle>

          <Formik
              initialValues={{email:'',password:''}}
              onSubmit={(values)=>{
                  console.log(values);
              }}
          >   
              {({handleChange, handleBlur, handleSubmit, values})=>(
              <StyledFormArea>  
                      <View>
                        <Stopwatch laps msecs  start={start}
                          reset={reset}
                          options={options}
                          />
                        <TouchableHighlight onPress={toggleStopwatch} style={{backgroundColor:"#2E79F2", borderRadius: 5, padding:4, margin:5, alignItems:"center"}}>
                          <Text style={{ fontSize: 28, color:"#E5E7EB"}}>{!start ? "Start" : "Stop"}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={resetStopwatch} style={{backgroundColor:"#2E79F2", borderRadius: 5, padding:4, margin:5, alignItems:"center"}}>
                          <Text style={{ fontSize: 28, color:"#E5E7EB" }} >Reset</Text>
                        </TouchableHighlight>
                      </View> 
                  <Line />

              </StyledFormArea>
              )}

          </Formik>

      </InnerContainer>
    </StyledContainer>
  )
}

const options = {
  container: {
    alignItems:"center",
    backgroundColor: '#afc8f0',
    padding: 5,
    borderRadius: 5,
    width: 260,
  },
  text: {
    fontSize: 30,
    color: '#000000',
    marginLeft: 7,
  }
};

export default StopWatchAPI;