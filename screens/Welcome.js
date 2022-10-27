import React, {useState, Component, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';


//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Text, Button, StyleSheet } from 'react-native';

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
    WelcomeContainer,
    WelcomeImage,
    Avatar,
    myContainer,
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

//timer를 위한 코드
const StartWorkout=()=>{
    //states
    const [timer, setTimer]=useState(0);
    const [minute, setMinute]=useState("");
    const [second, setSecond]=useState("");
    const [milliSecond, setMilliSecond] = useState("");
    const [toggleTimer, setToggleTimer] = useState(false);
    const [toggleBtnName, setToggleBtnName] = useState("시작");
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0)
    let startTime = 0;

    const leftTimeRef=useRef(0);

    //Hooks
    useEffect(()=>{
        minuteCalculator();
        console.log("남은 시간: ",timer);
        if (timer<=0){
            setToggleTimer(false);
            setIsTimerRunning(false);
        }
    },[timer])

    useEffect(()=>{
        if (toggleTimer){
            startTime=Date.now();
            const timerInterval=setInterval(timeDecrement,1000);
            leftTimeRef.current=timer;
            setIntervalId(timerInterval);
            setIsTimerRunning(true);
        } else if (!toggleTimer || timer<0){
            clearInterval(intervalId);
        }
    }, [toggleTimer])

    useEffect(()=>{
        if(!isTimerRunning){
            setToggleBtnName('시작');
        } else if (isTimerRunning && !toggleTimer){
            setToggleBtnName('다시 시작');    
        } else if (isTimerRunning && toggleTimer){
            setToggleBtnName('일시정지');
        }
    

    }, [isTimerRunning, toggleTimer])
    //event Handleler
    const addTime=(time)=>{
        setTimer((prev)=>prev+time)
    }
    const minuteCalculator = () => {
        let tempMinute = parseInt(timer / 60).toString();
        let tempSecond = timer % 60
        let tempSecondre = Math.round((tempSecond / 1)).toString();
        let tempMilliSecond = Math.round(((tempSecond % 1) * 100)).toString()

        setMinute(tempMinute);
        setSecond(tempSecondre);
        setMilliSecond(tempMilliSecond);
    }
    const toggleTimerFunc = () => {
        if (toggleTimer) {
            setToggleTimer(false)
        } else if (!toggleTimer && timer > 0){
            setToggleTimer(true)
        }
    }

    const timeDecrement = () => {
        setTimer((prev) => prev - 0.01);
    }

    const clearTime = () => {
        setTimer(0);
    }
    
    // ... return 
}

const Welcome=({navigation})=>{
    return(
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/logo.png')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>다공에 오신 것을 환영합니다!</PageTitle>
                    <SubTitle welcome={true}>열심히 공부해 보아요^_^</SubTitle>
                    <StyledButton>
                        <ButtonText>
                            타이머
                        </ButtonText>
                    </StyledButton>

                    <StyledFormArea>
                        <Line />
                        <StyledButton onPress={()=>{navigation.navigate('Login');
                    }}
                    >
                            <ButtonText>로그아웃</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};
   
export default Welcome;