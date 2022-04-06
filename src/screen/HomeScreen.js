import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import LoginStack from '../stacks/LoginStack';
import PrincipalStackScreen from '../stacks/PrincipalStackScreen';
import ServiciosStackScreen from '../stacks/ServiciosStackScreen';
import UserStackScreen from '../stacks/UserStackScreen';


const Tab = createMaterialBottomTabNavigator();
export default function homeScreen() {
    return (
        
        <NavigationContainer independent={true}>
            <Tab.Navigator activeColor='#cb997e' inactiveColor='#ffe8d6' barStyle={{
                backgroundColor: '#ffffff',
                position: 'absolute',
                height: 80,
                borderRadius: 15,
                justifyContent: 'center',
                left: 10,
                right: 10,
                elevation: 5
            }}>
                <Tab.Screen name='Home' component={PrincipalStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name='home' size={25} style={{color: focused ? '#E4B0F6' : '#303030'}} />
                    )
                }} />
                <Tab.Screen name='Servicios' component={ServiciosStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Entypo name='book' size={25} style={{color: focused ? '#E4B0F6' : '#303030'}} />
                    )
                }} />
                <Tab.Screen name='Usuario' component={UserStackScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <Icon name='user' size={25} style={{color: focused ? '#E4B0F6' : '#303030'}} />
                    )
                }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
