import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from '../screen/HomeScreen';

const HomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <HomeStack.Screen name="home" component={home} />
    </HomeStack.Navigator>
  );
};

export default HomeStack;