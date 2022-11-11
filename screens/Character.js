import React, {useState, Component, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';


//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Text, Button, StyleSheet, Image } from 'react-native';

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

// 현재 날짜 (월)
const todayTime= () => {
    let now = new Date();       // 현재 날짜 및 시간
    let todayMonth=now.getMonth()+1;
    return todayMonth;
}

const Character=({navigation})=>{
    let now=new Date(); // 현재 날짜
    let month=now.getMonth()+1;
    return(
        <>
            <StatusBar style="light" />
            <View> 
            {month == 1 ? <Image style={styles.Image} source={require('./../assets/img/winter.jpg')} /> :null}
            {month == 2 ? <Image style={styles.Image} source={require('./../assets/img/winter.jpg')} /> :null}
            {month == 3 ? <Image style={styles.Image} source={require('./../assets/img/spring.jpg')} /> :null}
            {month == 4 ? <Image style={styles.Image} source={require('./../assets/img/spring.jpg')} /> :null}
            {month == 5 ? <Image style={styles.Image} source={require('./../assets/img/spring.jpg')} /> :null}
            {month == 6 ? <Image style={styles.Image} source={require('./../assets/img/summer.jpg')} /> :null}      
            {month == 7 ? <Image style={styles.Image} source={require('./../assets/img/summer.jpg')} /> :null}
            {month == 8 ? <Image style={styles.Image} source={require('./../assets/img/summer.jpg')} /> :null} 
            {month == 9 ? <Image style={styles.Image} source={require('./../assets/img/fall.jpg')} /> :null} 
            {month == 10 ? <Image style={styles.Image} source={require('./../assets/img/fall.jpg')} /> :null}
            {month == 11 ? <Image style={styles.Image} source={require('./../assets/img/fall.jpg')} /> :null}
            {month == 12 ? <Image style={styles.Image} source={require('./../assets/img/winter.jpg')} /> :null}
                 <Text style={styles.Text}>
                    {'\n'}
                    당근을 열심히 키워보자
                        
                 </Text>
            </View>
        </>
    );
};
   
const styles=StyleSheet.create({
    Image: {
        width: 400,
        height: 600,
        resizeMode: "cover",
    },
    Text: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default Character;