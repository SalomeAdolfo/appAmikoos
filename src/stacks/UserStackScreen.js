import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import user from '../screen/UserScreen';

const UserStackScreen = () => {
  const UserStack = createNativeStackNavigator();
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false, //Sirve para ocultar el nombre del header
      }}>
      <UserStack.Screen name="dashboard" component={user} />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;