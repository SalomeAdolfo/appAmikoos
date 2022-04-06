import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import servicios from '../screen/ServiciosScreen';

const ServiciosStackScreen = () => {
  const serviciosStack = createNativeStackNavigator();
  return (
    <serviciosStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <serviciosStack.Screen name="servicios" component={servicios} />
    </serviciosStack.Navigator>
  );
};

export default ServiciosStackScreen;