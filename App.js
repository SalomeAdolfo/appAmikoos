import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import homestack from './src/stacks/HomeStack'
import logInScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';


const Stack = createNativeStackNavigator();


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name="login" component={logInScreen} />
      <Stack.Screen name="home" component={homestack} />
      <Stack.Screen name='register' component={RegisterScreen} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}