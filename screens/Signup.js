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
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
} from './../components/styles';

//Colors
const {brand,darkLight} = Colors;

const Signup=({navigation})=>{
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Dagong</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{ fullName:'', email:'',password:'', confirmPassword:'', age:''}}
                    onSubmit={(values)=>{
                        
                        // 입력 안하는 것 방지
                        if (values.fullName == ""){
                            alert("이름을 입력해 주세요.");
                        } else if (values.email == ""){
                            alert("이메일을 입력해주세요.");
                        } else if (values.password == ""){
                            alert("비밀번호를 입력해주세요.");
                        } else if (values.confirmPassword == ""){
                            alert("비밀번호(재확인)를 입력해주세요.");
                        } else if (values.age == ""){
                            alert("나이를 입력해주세요.")
                        } else{
                            // password, confirm password 일치 확인
                            if(values.password!=values.confirmPassword){
                                alert("비밀번호가 일치하지 않습니다.")
                            }else{
                                navigation.navigate("Welcome");
                            }
                        }
                        
                        // 로컬 db 넣는 거 추가 예정.
                        console.log(values);
                        
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values})=>(
                    <StyledFormArea>
                        <MyTextInput
                            label="이름"
                            icon="person"
                            placeholder="김철수"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />

                        <MyTextInput
                            label="이메일"
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

                        <MyTextInput
                            label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput
                            label="나이"
                            icon = "person"
                            placeholder="20"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('age')}
                            onBlur={handleBlur('age')}
                            value={values.age}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Signup
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        {/*<ExtraView>
                            <ExtraText>이미 계정이 있나요?</ExtraText>
                            <TextLink onPress={()=>navigation.navigate('Login')}>
                                <TextLinkContent>로그인하기</TextLinkContent>
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


export default Signup;