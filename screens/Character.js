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
const Character=({navigation})=>{
    return(
        <>
            <StatusBar style="light" />
            <View> 
                <Image style={styles.Image}
                    source={require('./../assets/img/fall.jpg')}
                 />  
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