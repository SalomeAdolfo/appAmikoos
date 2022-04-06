import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Madoka} from 'react-native-textinput-effects';
import {useNavigation} from '@react-navigation/native';
import app from '../../App';
import MapView from 'react-native-maps';

const Stack = createNativeStackNavigator();

//Defino las rutas para la navegacion por rutas.
export default function UbicacionScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{...styles.main}}>
      <View style={{...styles.header}}>
        <Image source={require('../../assets/img/logo_pets.jpeg')} style={{alignSelf:'center', borderRadius:20}} />
      </View>
      <View>
        <Card containerStyle={{...styles.card}}>
          <Card.Title style={{...styles.titles}}>Conocemos</Card.Title>
          <Text style={{...styles.text_card}}>
            La palabra AMIKOOS deriva de la lengua Maya que significa AMIGO, ya
            que para nosotros, un perro, gato u otro animalito es un miembro de
            la familia, no un objeto. Por lo que un AMIKOO merece una
          </Text>
        </Card>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{width:180}}>
          <Card containerStyle={{height:300, backgroundColor:'#DEB9FF', borderRadius: 15}}>
            <Card.Title style={{...styles.titles}}>Misión</Card.Title>
            <Text style={{...styles.text_card}}>
              Consolidarnos Como La Mejor Y Más Innovadora Clínica Veterinaria
              Del Estado De México
            </Text>
          </Card>
        </View>

        <View style={{width:180}}>
          <Card containerStyle={{height:300, backgroundColor:'#DEB9FF', borderRadius: 15}}>
            <Card.Title style={{...styles.titles}}>Visión</Card.Title>
            <Text style={{...styles.text_card}}>
              Ser La Mejor Clínica Veterinaria De La Ciudad, Mediante El Aporte
              De Soluciones Médicas Acertadas E Inmediatas A Nuestros Pacientes.
            </Text>
          </Card>
        </View>
      </View>
      <View style={{}}>
        <Image source={{uri:'https://th.bing.com/th/id/R.55700b6e84679243978cb97dab316c5b?rik=yPFcSILNXzRruQ&riu=http%3a%2f%2fblog.dflatmadrid.com%2fwp-content%2fuploads%2f2015%2f09%2f3mascotas.jpg&ehk=IP1%2fGvmStp%2bwuwAlQumFHeIKikiWtzpl7ruFqgiiY1k%3d&risl=&pid=ImgRaw&r=0'}} style={{width:'90%',alignSelf:'center', height:100, top:25, borderRadius:25}}/>
        <Button type='outline' title={'¿Ya sabes lo que necesitas?'} buttonStyle={{
          justifyContent:'center',
          borderColor:'black',
          borderRadius:15,
          marginVertical: 40,
          height: 50,
          width: '80%',
          alignSelf:'center'
        }}
        titleStyle={{
          fontSize: 20,
          color:'black'
        }} onPress={()=>navigation.navigate('Servicios')}/>
      </View>
      <View style={{height:80}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text_card: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 15,
  },
  titles: {
    fontSize: 20,
    backgroundColor:'#F59DF2',
    top:-25
  },
  card: {
    backgroundColor:'#DEB9FF', borderRadius: 15
  },
  image: {
    width: 500,
  },
  main: {
    flex:1
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 30,
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignSelf:'center'
  },
});
