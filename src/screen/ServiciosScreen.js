import {Text, View,TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import loginStack from '../stacks/LoginStack';


function Root (){
  return(
<View>
  <Text>Hola</Text>
</View>
  )
}
export default function ServiciosScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{...styles.main}}>
        <View style={{...styles.header}}>
          <Text style={{...styles.text}}>Servicio</Text>
        </View>

        <View style={{...styles.content}}>
          <View style={{...styles.sections}}>
            <View style={{...styles.cards_category}}>

              <Card>
              <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Card.Image source={{uri:'https://www.lpsagrofarma.com.br/imagens_sistema/f5d4570c16773e19f17c6e025295a13f.jpg'}} width={50} height={50}/>
                <Text style={{...styles.text_cards}}>Medicamentos</Text></TouchableOpacity>
              </Card>
            </View>

            <View style={{...styles.cards_category}}>
              <Card>
                <TouchableOpacity>
                <Card.Image source={{uri:'https://th.bing.com/th/id/R.6e4d9608a8058f03ee1e5bf1aa270a6f?rik=%2fwO3amCahZo4Ug&pid=ImgRaw&r=0'}} width={50} height={50}/>
                <Text style={{...styles.text_cards}}>Alimento</Text></TouchableOpacity>
              </Card>
            </View>
          </View>

          <View style={{...styles.sections}}>
            <View style={{...styles.cards_category}}>
              <Card>
                <TouchableOpacity>
                <Card.Image source={{uri:'https://th.bing.com/th/id/OIP.6_3QY2onpsC5MTA03Ek1KwHaHa?pid=ImgDet&rs=1'}} width={50} height={50} />
                <Text style={{...styles.text_cards}}>Accesorios</Text></TouchableOpacity>
              </Card>
            </View>

            <View style={{...styles.cards_category}}>
              <Card>
                <TouchableOpacity>
                <Card.Image source={{uri:'https://momosiempreamigos.com/wp-content/uploads/2019/06/higiene-bucal-mascotas.jpg'}} width={50} height={50} />
                <Text style={{...styles.text_cards}}>Higiene</Text></TouchableOpacity>
              </Card>
            </View>
          </View>

          <View style={{...styles.sections}}>
            <View style={{...styles.cards_category}}>
              <Card>
                <TouchableOpacity>
                <Card.Image source={{uri:'https://chapasparaperros.com/images/stories/virtuemart/product/placas-para-mascotas-huella-roja.jpg'}} width={50} height={50} />
                <Text style={{...styles.text_cards}}>Placas</Text></TouchableOpacity>
              </Card>
            </View>

            <View style={{...styles.cards_category}}>

              <Card>
                <TouchableOpacity>
                <Card.Image source={{uri:'https://th.bing.com/th/id/OIP.NEWiieF3Cz5M-qqAfb3a_wHaEd?pid=ImgDet&rs=1'}} width={50} height={50} />
                <Text style={{...styles.text_cards}}>Vacunas</Text></TouchableOpacity>
              </Card>
            </View>
          </View>
        </View>
        <View style={{height:100}} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#E4B0F6',
    position: 'relative',
    width: '80%',
    alignItems: 'center',
    borderRadius: 53,
    marginVertical: 20,
    height: 62,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '100',
  },
  content: {
    flexDirection: 'column',
    width: '85%',
  },
  image_cards:{
    width:50,
    height:50
  },
  sections: {
    flexDirection: 'row',
    width:'100%',
    justifyContent:'center',
  },
  cards_category:{
    width:'60%',
  },
  text_cards:{
    color:'black',
    alignSelf:'center',
    fontSize:15
  }
});
