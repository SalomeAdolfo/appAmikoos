import {View, StyleSheet, ScrollView} from 'react-native';
import React , {useState}from 'react';
import {Akira} from 'react-native-textinput-effects';
import {Card, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import baseURL from '../routes/api';
const RegisterScreen = () => {
  const navigation = useNavigation();

    //Estados para el registro
    const [correo, setCorreo] = useState('');
    const [codigo, setCodigo] = useState('');
    const [vivienda, setVivienda] = useState('');
    const [tel, setTel] = useState('');
    const [nombreU, setNombreU] = useState('');
    const [passw , setPassw] = useState('');
    //Fin de estados

  const url = '/api/users';
  const registerUser = async (
    nombre,
    cp,
    direccion,
    telefono,
    password,
    email,
  ) => {
   try {
     const res = await fetch(baseURL+url,
      {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          name:nombre, codigopostal:cp, direccion:direccion,telefono:telefono,nickname:nombre,email:email, password:password,
        }),
      },
      )
      .then(response => 
        {
          if (response.status==200) {
            alert('Usuario creado')
            navigation.navigate('home')
          }else{
            alert('Todo salió mal, usuario existente, por favor, inténtelo de nuevo')
          }
        });
   } catch (error) {
     console.log(error)
   }
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{flex: 1}}>
        <Card
          containerStyle={{
            borderRadius: 25,
            elevation: 15,
            height: 700,
            justifyContent: 'center',
          }}>
          <Akira
            label={'Nombre'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            onChangeText={text => setNombreU (text)}
            value={nombreU}
          />
          <Akira
            label={'Código postal'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            onChangeText={text => setCodigo (text)}
            value={codigo}
          />
          <Akira
            label={'Dirección'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            onChangeText={text => setVivienda (text)}
            value={vivienda}
          />
          <Akira
            label={'Teléfono'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            onChangeText={text => setTel (text)}
            value={tel}
          />
          <Akira
            label={'Email'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            onChangeText={text => setCorreo (text)}
            value={correo}
          />
          <Akira
            label={'Password'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            onChangeText={text => setPassw (text)}
            value={passw}
            secureTextEntry={true}
          />
          <Akira
            label={'Confirm Password'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
            secureTextEntry={true}
          />
          <Button
            type="outline"
            title={'Enviar'}
            titleStyle={{color: 'blue'}}
            buttonStyle={{...styles.button}}
            onPress={() => registerUser(nombreU,codigo,vivienda,tel,passw,correo)}
          />
        </Card>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 15,
    borderColor: 'red',
  },
});
export default RegisterScreen;
