import React, {useState} from 'react';
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
    Line
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

const Login=()=>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo.PNG')} />
                <PageTitle>Dagong</PageTitle>
                <SubTitle>로그인 해주세요!</SubTitle>

                <Formik
                    initialValue={{email:'',password:''}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values})=>(<StyledFormArea>
                        <MyTextInput
                            label="ID"
                            icon="sparkles-outline"
                            placeholder="ID를 입력해주세요."
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('id')}
                            onBlur={handleBlur('id')}
                            value={values.id}
                            keyboardType="id"
                        />

                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </styledButton>
                        <Line />
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
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
                <Octicons name{icon} size={30} color={brand}/>
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

export default Login;