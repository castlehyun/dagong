import React from "react";

import {Colors} from './../components/styles';
const {primary,teritary}=Colors;

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Todolist2 from "../screens/Todolist2";
import StopWatchAPI from "../screens/StopWatchAPI";
import Character from "../screens/Character";

const Stack=createStackNavigator();

const RootStack=()=>{

    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled:{
                        backgroundColor:'transparent'
                    },
                    headerTintColor:teritary,
                    headerTransparent:true,
                    headerTitle:'',
                    headerLeftContainerStyle:{
                        paddingLeft:20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="StopWatchAPI" component={StopWatchAPI} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Todolist2" component={Todolist2} />
                <Stack.Screen name="Character" component={Character} />
                <Stack.Screen options= {{headerTintColor:primary}} name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default RootStack;