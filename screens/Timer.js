// import React, { useState, useEffect, useRef } from 'react';
// import { Text, StyleSheet } from 'react-native';
// import {StatusBar} from 'expo-status-bar';
// import {Formik} from 'formik';

// import {
//   Text_TIMER,
//   StyledContainer,
//   InnerContainer,
//   PageLogo,
//   PageTitle,
//   SubTitle,
//   StyledFormArea,
//   LeftIcon,
//   StyledInputLabel,
//   StyledTextInput,
//   RightIcon,
//   StyledButton,
//   ButtonText,
//   Colors,
//   MsgBox,
//   Button_timer,
//   Line,
//   ExtraText,
//   ExtraView,
//   TextLink,
//   TextLinkContent,
// } from './../components/styles';

// var _interval

// const Timer = () => {
//     const sec = 100;
//     const [second, setSecond] = useState(sec);
//     const [delay, setDelay] = useState(1000);
//     const [isRunning, setIsRunning] = useState(true);

//     //setIsRunning(false);

//     useInterval(() => {
//       setSecond(second - 1)
//     }, second >= 1 ? delay : null);

//     return (

//       <StyledContainer>
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
//                       <Text_TIMER> {Math.floor(second / 60)} : {second % 60} </Text_TIMER>      
//                       <Button_timer>
//                           <ButtonText>
//                               Start
//                           </ButtonText>
//                       </Button_timer>
//                       <StyledButton>
//                           <ButtonText onPress={start()}>
//                               Stop
//                           </ButtonText>
//                       </StyledButton>
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
      
//   );
// }

// // function start(){
// //   console.log("hiidsfsis")
// //   const [second, setSecond] = useState(sec);
// //   const [delay, setDelay] = useState(1000);
// //   const [isRunning, setIsRunning] = useState(true);

// //   console.log(second)

// //   useInterval(() => {
// //       setSecond(second - 1)
// //   }, second >= 1 ? delay : null);

// //   if(second == 0){
// //     console.log("second end");
// //   }
// // }

// function useInterval(callback, delay) {
//     const savedCallback = useRef();

//     // Remember the latest callback.
//     useEffect(() => {
//         savedCallback.current = callback;
//     }, [callback]);

//     // Set up the interval.
//     useEffect(() => {
//         function tick() {
//             savedCallback.current();
//         }
//         if (delay !== null) {
//             let id = setInterval(tick, delay);
//             return () => clearInterval(id);
//         }
//     }, [delay]);
// }



// export default Timer;