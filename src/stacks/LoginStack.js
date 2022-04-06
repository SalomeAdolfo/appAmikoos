import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import logInScreen from '../screen/LoginScreen';

const loginStack = () => {
  const loginStack = createNativeStackNavigator();
  return (
    <loginStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <loginStack.Screen name="LogIn" component={logInScreen} />
    </loginStack.Navigator>
  );
};

export default loginStack;