import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screen/MainScreen';
const MainStack = () => {
  const mainStack = createNativeStackNavigator();
  return (
    <mainStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <mainStack.Screen name="LogIn" component={Main} />
    </mainStack.Navigator>
  );
};

export default MainStack;