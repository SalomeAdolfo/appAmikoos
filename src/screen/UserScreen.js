import {Text, View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function UsuarioScreen() {
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
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='shield' color={'black'} size={20} style={{...styles.icons}}/>} type='outline' title={'Conócenos'}></Button>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='heart' color={'black'} size={20} style={{...styles.icons}}/>}type='outline' title={'Sugerencias para tí'}></Button>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='search' color={'black'} size={20} style={{...styles.icons}} />} type='outline' title={'¿Olvidaste algo?'}></Button>
        <Button titleStyle={{...styles.title_styles}} buttonStyle={{...styles.buttons_styles}} icon={<Icon name='gear' color={'black'} size={20} style={{...styles.icons}}/>} type='outline' title={'Cerrar sesión'}/>
        </View>
        <View>
          <Image source={{uri:'https://th.bing.com/th/id/R.8597eb82d4343e31d2a02620246b67eb?rik=6WnYN8NSgWqNFQ&riu=http%3a%2f%2fwww.gentedecanaveral.com%2fwp-content%2fuploads%2f2016%2f11%2fDATA_ART_9860816_VERTIL.jpg&ehk=P2cLsF4e9asNzYkwJoH6YYYPKeRFVtyguS7%2b0WY3OHQ%3d&risl=&pid=ImgRaw&r=0'}} style={{...styles.image_main}}/>
        </View>
      </Card>
    </View>
  );
}
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
