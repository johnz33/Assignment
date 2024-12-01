import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationIndependentTree} from '@react-navigation/native';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import HomeScreen from './pages/HomeScreen';

const Stack =createStackNavigator();

const NavigationScreen = () => {
  return (
      
        <NavigationIndependentTree>
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} /> 
           <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
           <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationIndependentTree>
    
  )
}

export default NavigationScreen;
