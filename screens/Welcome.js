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
const Welcome=({navigation})=>{
    return(
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/logo.png')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>다공에 오신 것을 환영합니다!</PageTitle>
                    <SubTitle welcome={true}>열심히 공부해 보아요^_^</SubTitle>
                    <StyledButton onPress={()=>{navigation.navigate('StopWatchAPI');}}>
                        <ButtonText>
                            타이머
                        </ButtonText>
                    </StyledButton>

                    <StyledButton onPress={()=>navigation.navigate("Todolist2")}>
                            <ButtonText>
                                할 일 확인
                            </ButtonText>
                    </StyledButton>

                    <StyledButton onPress={()=>navigation.navigate("Character")}>
                            <ButtonText>
                                캐릭터 보러가기
                            </ButtonText>
                    </StyledButton>
                    {/* <Text style={{fontSize:20, borderRadius: 5, padding:5, margin:5}}>
                        point : 10
                    </Text> */}

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