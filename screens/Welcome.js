import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

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
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

const Welcome=()=>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer style={{flex:2,justifyContent:'space-around',flexDirection:'row'}}>
                <StyledButton onPress={()=>{}}>
                    <ButtonText>
                        상점 가기
                    </ButtonText>
                </StyledButton>
                <Icon name="alarm-outline" size={70} color="#2E79F2" />
                <InnerContainer>
                    <StyledButton onPress={()=>{}}>
                        <ButtonText>
                            투두리스트
                        </ButtonText>
                    </StyledButton>
                    <Icon name="heart-circle-outline" size={70} color="#2E79F2" />
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


export default Welcome;