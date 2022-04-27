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
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

const Welcome=()=>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark" />

            <InnerContainer>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/insteadTm.png')}/>
                <WelcomeContainer>
                    <StyledButton onPress={()=>{}}>
                        <ButtonText>
                            투두리스트
                        </ButtonText>
                    </StyledButton>

                    <PageTitle welcome={true}>다공</PageTitle>
                    <SubTitle welcome={true}>다함께 공부하는 다공</SubTitle>
                    <StyledFormArea>
                        {/*여기다가 나중에 java로 만든 아바타 삽입*/}
                        <Line />
                        <StyledButton onPress={()=>{}}>
                            <ButtonText>
                                스터디룸 입장
                            </ButtonText>
                        </StyledButton>


                    </StyledFormArea>

                </WelcomeContainer>

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