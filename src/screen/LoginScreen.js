import {View, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, Card} from 'react-native-elements';
import {Madoka} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import baseURL from '../routes/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

var token;
//Defino las rutas para la navegacion por rutas.
export default function logInScreen() {
  const navigation = useNavigation();
  const url = '/api/sanctum/token';
  const token = async (direccion, contrasenia) => {
    try {
      const res = await fetch(baseURL + url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: direccion,
          password: contrasenia,
        }),
      })
        .then(res => res.json())
        .catch(error => console.log('Error: ' + error))
        .then(response => {
         
            
            console.log('Success: ' + response['token']);
            alert('Bienvenida: ' + response['1']),
            saveData(response['token']),
            navigation.navigate('home')
          
        });
    } catch (error) {
      alert('Credenciales incorrectas, inténtelo de nuevo')
    }
  
  };

  const saveData = async(token)=>{
    try{
      AsyncStorage.removeItem('token')
      AsyncStorage.setItem(
        'token',
        JSON.stringify({
          token: token
        })
      );
    }catch(error){
      console.log(error)
    }
  }
  
  const getToken = async () =>{
    try{
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? JSON.parse(jsonValue): null
    }catch(e){
      console.log(e)
    }
  }

  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  console.log(name)
  console.log(pass)
  return (
    
    <View style={{flex: 1, justifyContent:'center', backgroundColor: 'white'}}>
        <Card
          containerStyle={{
            borderRadius: 15,
            elevation: 10,
          }}>
            <Image source={require('../../assets/img/Fondo_Login.png')} style={{
              alignSelf: 'center',
              width: 50,
              height: 50
            }}/>
          <Card.Title style={{fontSize: 20, color: 'black'}}>
            Iniciar Sesión
          </Card.Title>

          <Madoka
            label="E-mail"
            borderColor="black"
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: 'black', fontSize: 15}}
            inputStyle={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 15,
            }}
            onChangeText={text => setname(text)}
            value={name}
          />

          <Madoka
            label="Password"
            borderColor="black"
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: 'black', fontSize: 15}}
            inputStyle={{
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 15,
            }}
            onChangeText={password => setpass(password)}
            value={pass}
            secureTextEntry={true}
          />

          <Button
            type="outline"
            title={'Iniciar sesión'}
            titleStyle={{color: 'black', fontWeight: 'bold', fontSize: 25}}
            buttonStyle={{
              borderRadius: 15,
              width: 300,
              borderColor: 'black',
            }}
            onPress={() => token(name, pass)}
          />

          <Button
            type="clear"
            title={'Registrarse'}
            titleStyle={{color: 'black', fontWeight: 'bold', fontSize: 18}}
            buttonStyle={{
              marginVertical: 10,
              borderRadius: 15,
              width: 300,
              borderColor: 'black',
            }}
            onPress={()=> navigation.navigate("register")}
          />
        </Card>
        {AsyncStorage.getItem('token')!=null && navigation.navigate("login")}
        {AsyncStorage.getItem('token')==null && navigation.navigate("login")}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
