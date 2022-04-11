import {Text, View, Image, StyleSheet, BackHandler} from 'react-native';
import React from 'react';
import {Button, Card, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VentasScreen from '../User/VentasScreen';
import ProveedoresScreen from '../User/ProveedoresScreen';
import StocksScreen from '../User/StocksScreen';
import LoginScreen from '../screen/LoginScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();
function logOut(){
  try{
    AsyncStorage.removeItem('token');
    BackHandler.exitApp()
  }catch(e){
    console.log(e)
  }
}
function UsuarioScreen({navigation}) {
  return (
    <View style={{...styles.main}}>
        
      <Card containerStyle={{...styles.header}}>
        <Image
          source={require('../../assets/img/Fondo_Login.png')}
          style={{...styles.imagen_header}}
        />
        <Text style={{...styles.text}}>User</Text>
        <Divider style={{width: 250}} />

        <View style={{...styles.buttons_section}}>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='dollar' color={'black'} size={20} style={{...styles.icons}}/>} type='outline' title={'Ventas'} onPress={()=>navigation.navigate('Ventas')}></Button>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='bus' color={'black'} size={20} style={{...styles.icons}}/>}type='outline' title={'Proveedores'} onPress={()=>navigation.navigate('Proveedores')}></Button>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='product-hunt' color={'black'} size={20} style={{...styles.icons}} />} type='outline' title={'Stocks'} onPress={()=>navigation.navigate('Stocks')}></Button>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='gear' color={'black'} size={20} style={{...styles.icons}}/>} type='outline' title={'Cerrar sesión'} onPress={()=> logOut()}/>
        </View>
        <View>
          <Image source={{uri:'https://th.bing.com/th/id/R.8597eb82d4343e31d2a02620246b67eb?rik=6WnYN8NSgWqNFQ&riu=http%3a%2f%2fwww.gentedecanaveral.com%2fwp-content%2fuploads%2f2016%2f11%2fDATA_ART_9860816_VERTIL.jpg&ehk=P2cLsF4e9asNzYkwJoH6YYYPKeRFVtyguS7%2b0WY3OHQ%3d&risl=&pid=ImgRaw&r=0'}} style={{...styles.image_main}}/>
        </View>
      </Card>
    </View>
  );
}
function App(){
  return(
  <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='Panel'>
      <Stack.Screen name='Panel' component={UsuarioScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Ventas' component={VentasScreen} />
      <Stack.Screen name='Proveedores' component={ProveedoresScreen} />
      <Stack.Screen name='Stocks' component={StocksScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App
const styles = StyleSheet.create({
  main: {
    alignItems:'center',
    flex:1
  },
  title_styles:{
    color:'black'
  },
  buttons_styles:{
    marginVertical: 5,
    borderColor: 'black',
  }, 
  header: {
    position: 'relative',
    elevation: 10,
    shadowColor: 'yellow',
    borderRadius: 20
  },
  imagen_header: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 20,
  },
  buttons_section:{
      marginVertical: 20
  },
  icons:{
    marginHorizontal: 10
  },
  image_main:{
    width: '100%',
    height:240,
    alignSelf:'center',
    borderRadius:15
  }
});
