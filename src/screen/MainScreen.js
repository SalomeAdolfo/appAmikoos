import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const MainScreen = () => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Button type='outline' title={'Ingresar'} onPress={() => navigate('home')}>

      </Button>
    </View>
  )
}

export default MainScreen