// import React, { Component } from 'react';
// import {View, Text, StyleSheet, StatusBar} from 'react-native';
// import Button from '../components/Timer/button';
// import {Formik} from 'formik';

// import {
//     Text_TIMER,
//     StyledContainer,
//     InnerContainer,
//     PageLogo,
//     PageTitle,
//     SubTitle,
//     StyledFormArea,
//     LeftIcon,
//     StyledInputLabel,
//     StyledTextInput,
//     RightIcon,
//     StyledButton,
//     ButtonText,
//     Colors,
//     MsgBox,
//     Button_timer,
//     Line,
//     ExtraText,
//     ExtraView,
//     TextLink,
//     TextLinkContent,
//   } from './../components/styles';

// class Timer extends Component{
//     render(){
//         return (
//             <StyledContainer>
//           <StatusBar style="dark" />
//           <InnerContainer>
//               <PageLogo resizeMode="cover" source={require('./../assets/logo.png')} />
//               <PageTitle>Timer</PageTitle>
//               <SubTitle>현재 공부 시간</SubTitle>

//               <Formik
//                   initialValues={{email:'',password:''}}
//                   onSubmit={(values)=>{
//                       console.log(values);
//                       alert("start 버튼 누름")
//                   }}
//               >   
//                   {({handleChange, handleBlur, handleSubmit, values})=>(
//                   <StyledFormArea>
//                     <View>
//                         <StatusBar barStyle={"light-content"} />
//                         <View style={styles.upper}>
//                             <Text style={styles.time}>25:00</Text>
//                         </View>
//                         <View style={styles.lower}>
//                             <Button iconName= "play-circle" onPress={() => alert("it works!")}/>
//                             <Button iconName= "stop-circle" onPress={() => alert("it works!")}/>
//                         </View>
//                     </View>
//                       <StyledButton onPress={()=>navigation.navigate("Signup")}>
//                           <ButtonText>
//                               + 10 Minute
//                           </ButtonText>
//                       </StyledButton>
//                       <Line />

//                   </StyledFormArea>
//                   )}

//               </Formik>

//           </InnerContainer>
//       </StyledContainer>
            
//         );
//     }
// }

// const styles = StyleSheet.create({
//     upper : {
//         justifyContent:"center",
//         alignItems : "center"
//     },
//     lower: {
//         justifyContent:"center",
//         alignItems : "center"
//     },
//     time : {
//         color:"gold",
//         fontSize : 100,
//         fontWeight:"100"
//     }
// });

// export default Timer;