import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
//formik
import {Formik} from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';


import {View, SafeAreaView} from 'react-native';

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

const Login=({navigation})=>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
                <PageTitle>Dagong</PageTitle>
                <SubTitle>로그인 해주세요!</SubTitle>

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
                            label="Email Address"
                            icon="mail"
                            placeholder="dagnong@gmail.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
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
                        </StyledButton>
                        <StyledButton onPress={()=>navigation.navigate("Signup")}>
                            <ButtonText>
                                회원가입
                            </ButtonText>
                        </StyledButton>
                        <StyledButton onPress={()=>navigation.navigate("Todolist2")}>
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


export default Login;