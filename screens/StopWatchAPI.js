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
  
  // this.state = {
  //   timerStart: false,
  //   stopwatchStart: false,
  //   totalDuration: 90000,
  //   timerReset: false,
  //   stopwatchReset: false,
  // };

  // this.toggleTimer = this.toggleTimer.bind(this);
  // this.resetTimer = this.resetTimer.bind(this);
  // this.toggleStopwatch = this.toggleStopwatch.bind(this);
  // this.resetStopwatch = this.resetStopwatch.bind(this);

  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState(false);

  // toggleTimer = () => {
  //   this.setState({timerStart: !this.state.timerStart, timerReset: false});
  // }
 
  // resetTimer = () => {
  //   this.setState({timerStart: false, timerReset: true});
  // }
 
  // toggleStopwatch=() => {
  //   this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  // }
 
  // resetStopwatch = () => {
  //   this.setState({stopwatchStart: false, stopwatchReset: true});
  // }
  
  // getFormattedTime = (time) => {
  //     this.currentTime = time;
  // };

  toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  }

  resetStopwatch = () => {
    setStart(false);
    setReset(true);
    // console.log("10 포인트");
    // alert("10 포인트가 적립되었습니다.");
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
                  alert("start 버튼 누름")
              }}
          >   
              {({handleChange, handleBlur, handleSubmit, values})=>(
              <StyledFormArea>  
                      <View>
                        <Stopwatch laps msecs  start={start}
                          reset={reset}
                          options={options}
                          // getTime={(time) => {}} 
                          />
                        <TouchableHighlight onPress={toggleStopwatch} style={{backgroundColor:"#2E79F2", borderRadius: 5, padding:10, margin:5}}>
                          <Text style={{ fontSize: 30, textAlign: 'center', color: "#FFFFFF"}}>{!start ? "Start" : "Stop"}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={resetStopwatch} style={{backgroundColor:"#2E79F2", borderRadius: 5, padding:10, margin:5}}>
                          <Text style={{ fontSize: 30, textAlign: 'center', color: '#FFFFFF' }}>Reset</Text>
                        </TouchableHighlight>
                      </View> 
                      {/* <StyledButton onPress={()=>navigation.navigate("Welcome")}>
                            <ButtonText>
                                main 으로 돌아가기
                            </ButtonText>
                        </StyledButton> */}
                  <Line />

              </StyledFormArea>
              )}

          </Formik>

      </InnerContainer>
    </StyledContainer>
    // <View>
    //   <Stopwatch laps msecs  start={start}
    //     reset={reset}
    //     options={options}
    //     getTime={(time) => {}} />
    //   <TouchableHighlight onPress={toggleStopwatch}>
    //     <Text style={{ fontSize: 30 }}>{!start ? "Start" : "Stop"}</Text>
    //   </TouchableHighlight>
    //   <TouchableHighlight onPress={resetStopwatch}>
    //     <Text style={{ fontSize: 30 }}>Reset</Text>
    //   </TouchableHighlight>
    // </View>
  )
}

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};

export default StopWatchAPI;