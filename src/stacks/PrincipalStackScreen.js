import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import principal from '../screen/PrincipalScreen';

const UbicacionStackScreen = () => {
  const UbicacionStack = createNativeStackNavigator();
  return (
    <UbicacionStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <UbicacionStack.Screen name="ubicacion" component={principal} />
    </UbicacionStack.Navigator>
  );
};

export default UbicacionStackScreen;