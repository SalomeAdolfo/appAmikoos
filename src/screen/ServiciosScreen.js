import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const data = [
  {
    imagen:
      'https://th.bing.com/th/id/R.136ece45af168cd5553f82698a690bf8?rik=dEP4kYPZu2gujQ&riu=http%3a%2f%2fwww.imeve.com.br%2fes%2fuploads%2fpagina%2fpagina%2f2019%2f01%2fvGDnohyKf9MV0yVZ%2foranovite-petmax_400x400.jpg&ehk=3DJ3449NrhZP0saihS8TQXgty5yZXguyDaAbO0JF%2f4Y%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    title: 'Oranovit',
  },
  {
    imagen:
      'https://http2.mlstatic.com/medicina-preventiva-para-perros-y-gatos-D_NQ_NP_719715-MLM25302960096_012017-F.jpg',
    title: 'Endogard',
  },
  {
    imagen:
      'https://agropecuariaeltrebol.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcGxwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1c2f77854f155cc34ecce1042ba56723aac5e363/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9UY21WemFYcGxYMkZ1WkY5d1lXUmJDR2tDV0FKcEFsZ0Nld1k2QzJWNGRHVnVaRG9LZDJocGRHVTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--6c851047e6ae64014cbd1d8d2af6e14020af2115/medicamento-para-perros-gatos-quinocalf-tabletas-bactericida-uso-veterinario.png?locale=es',
    title: 'Quinocalf',
  },
  {
    imagen:
      'https://tienda.dondemiveterinario.com/wp-content/uploads/2020/09/Marboquin-50-para-perros-de-11-a-20kg.jpg',
    title: 'Marboquin',
  },
  {
    imagen:
      'https://dojiw2m9tvv09.cloudfront.net/25287/product/L_paciforgotas8566.jpg?145',
    title: 'Pacifor',
  },
];
const data2 = [
  {
    title: 'Dartacan',
    imagen:
      'https://i.pinimg.com/736x/00/a1/97/00a1979ceef726032b120bf12ff3b9dc.jpg',
  },
  {
    title: 'Shaggy',
    imagen:
      'https://http2.mlstatic.com/shaggy-adulto-25kg-croquetas-alimento-para-perro-D_NQ_NP_699441-MLM31239643486_062019-F.jpg',
  },
  {
    title: 'Pedigree',
    imagen:
      'https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/03/21/58d1f455c239c.jpeg',
  },
  {
    title: 'Keiko',
    imagen: 'https://www.cadena3.com/admin/playerswf/fotos/ARCHI_783398.png',
  },
];
const data3 = [
  {
    title: 'Cama',
    imagen:
      'https://http2.mlstatic.com/cama-mascotas-perros-animales-D_NQ_NP_10730-MLM20032974943_012014-F.jpg',
  },
  {
    title: 'Juguete',
    imagen:
      'https://i.pinimg.com/originals/70/af/60/70af60267a80b10c1ef385071ddb4bb5.jpg',
  },
  {
    title: 'Casa',
    imagen:
      'https://laverdadnoticias.com/export/sites/laverdad/img/2020/06/10/camita_hamaca_accesorios_diy_mascotas_1.jpg_976286741.jpg',
  },
  {
    title: 'Platos',
    imagen: 'https://www.mercawise.com/files/polls/0576165392.jpg',
  },
];
const data4 = [
  {
    title: 'Arena para gato',
    imagen:
      'https://images-na.ssl-images-amazon.com/images/I/71jjyVULcTL._AC_SX569_.jpg',
  },
  {
    title: 'Clean and Dry',
    imagen:
      'https://th.bing.com/th/id/OIP.Z1PGwIRNMsMKNVXckww4MwHaHa?pid=ImgDet&rs=1',
  },
  {
    title: 'Royal Canin',
    imagen:
      'https://th.bing.com/th/id/OIP.C-ue-1cEiO1Q1lwYM3F0mwHaHa?pid=ImgDet&rs=1',
  },
  {
    title: 'Sanicat',
    imagen:
      'https://images1.tiendanimal.pt/slide/500/12977__1-sanicat-arena-aglomerante-efecto-relax-para-gatos_2.jpg',
  },
];
const data5 = [
  {
    title: 'Categoria 1',
    imagen:
      'https://th.bing.com/th/id/R.b76c35dc5014ec253cf54a24d9b0a1a0?rik=z5YcRnEskdw%2fLA&pid=ImgRaw&r=0',
  },
  {
    title: 'Categoria 2',
    imagen:
      'https://http2.mlstatic.com/placa-identificacion-mascotas-D_NQ_NP_690686-MLM26965420460_032018-F.jpg',
  },
  {
    title: 'Categoria 3',
    imagen:
      'https://http2.mlstatic.com/placas-para-mascotas-de-aluminio-anodizado-para-grabar-D_NQ_NP_898693-MLM25901761488_082017-F.jpg',
  },
  {
    title: 'Categoria 4',
    imagen:
      'https://http2.mlstatic.com/placas-para-mascotas-de-aluminio-anodizado-para-grabar-D_NQ_NP_898693-MLM25901761488_082017-F.jpg',
  },
];
const Item = ({title, imagen}) => (
  <View>
    <Card containerStyle={{borderRadius:15, elevation:10}}>
      <Card.Title>{title}</Card.Title>
      <Image source={{uri: imagen}} style={{...styles.image_category}} />
    </Card>
  </View>
);
const Stack = createNativeStackNavigator();

//Menú

function ServiciosScreen() {
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
                <Pressable onPress={() => navigation.navigate('Medicamentos')}>
                  <Card.Image
                    source={{
                      uri: 'https://www.lpsagrofarma.com.br/imagens_sistema/f5d4570c16773e19f17c6e025295a13f.jpg',
                    }}
                    width={50}
                    height={50}
                  />
                  <Text style={{...styles.text_cards}}>Medicamentos</Text>
                </Pressable>
              </Card>
            </View>

            <View style={{...styles.cards_category}}>
              <Card>
                <Pressable onPress={() => navigation.navigate('Alimentos')}>
                  <Card.Image
                    source={{
                      uri: 'https://th.bing.com/th/id/R.6e4d9608a8058f03ee1e5bf1aa270a6f?rik=%2fwO3amCahZo4Ug&pid=ImgRaw&r=0',
                    }}
                    width={50}
                    height={50}
                  />
                  <Text style={{...styles.text_cards}}>Alimento</Text>
                </Pressable>
              </Card>
            </View>
          </View>

          <View style={{...styles.sections}}>
            <View style={{...styles.cards_category}}>
              <Card>
                <Pressable onPress={() => navigation.navigate('Accesorios')}>
                  <Card.Image
                    source={{
                      uri: 'https://th.bing.com/th/id/OIP.6_3QY2onpsC5MTA03Ek1KwHaHa?pid=ImgDet&rs=1',
                    }}
                    width={50}
                    height={50}
                  />
                  <Text style={{...styles.text_cards}}>Accesorios</Text>
                </Pressable>
              </Card>
            </View>

            <View style={{...styles.cards_category}}>
              <Card>
                <Pressable onPress={() => navigation.navigate('Higiene')}>
                  <Card.Image
                    source={{
                      uri: 'https://momosiempreamigos.com/wp-content/uploads/2019/06/higiene-bucal-mascotas.jpg',
                    }}
                    width={50}
                    height={50}
                  />
                  <Text style={{...styles.text_cards}}>Higiene</Text>
                </Pressable>
              </Card>
            </View>
          </View>

          <View style={{...styles.sections}}>
            <View style={{...styles.cards_category}}>
              <Card>
                <Pressable onPress={() => navigation.navigate('Placas')}>
                  <Card.Image
                    source={{
                      uri: 'https://chapasparaperros.com/images/stories/virtuemart/product/placas-para-mascotas-huella-roja.jpg',
                    }}
                    width={50}
                    height={50}
                  />
                  <Text style={{...styles.text_cards}}>Placas</Text>
                </Pressable>
              </Card>
            </View>

            <View style={{...styles.cards_category}}>
              <Card>
                <Pressable onPress={() => navigation.navigate('Vacunas')}>
                  <Card.Image
                    source={{
                      uri: 'https://th.bing.com/th/id/OIP.NEWiieF3Cz5M-qqAfb3a_wHaEd?pid=ImgDet&rs=1',
                    }}
                    width={50}
                    height={50}
                  />
                  <Text style={{...styles.text_cards}}>Vacunas</Text>
                </Pressable>
              </Card>
            </View>
          </View>
        </View>
        <View style={{height: 100}} />
      </View>
    </ScrollView>
  );
}

function medicamentosSreen({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.title} imagen={item.imagen} />
  );
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.imagen}
      />
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}
function AlimentosScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.title} imagen={item.imagen} />
  );
  return (
    <ScrollView>
      <FlatList
        data={data2}
        renderItem={renderItem}
        keyExtractor={item => item.imagen}
      />
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}
function AccesoriosScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.title} imagen={item.imagen} />
  );
  return (
    <ScrollView>
      <FlatList
        data={data3}
        renderItem={renderItem}
        keyExtractor={item => item.imagen}
      />
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}
function HigieneScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.title} imagen={item.imagen} />
  );
  return (
    <ScrollView>
      <FlatList
        data={data4}
        renderItem={renderItem}
        keyExtractor={item => item.imagen}
      />
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}
function PlacasScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.title} imagen={item.imagen} />
  );
  return (
    <ScrollView>
      <FlatList
        data={data5}
        renderItem={renderItem}
        keyExtractor={item => item.imagen}
      />
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}
function VacunasScreen({navigation}) {
  const renderItem = ({item}) => (
    <Item title={item.title} imagen={item.imagen} />
  );
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/OIP.yPBoiPYoo8Lt8SrHCD8phgHaH0?pid=ImgDet&rs=1',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
  );
}
function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main" screenOptions={{}}>
        <Stack.Screen
          name="Main"
          component={ServiciosScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Medicamentos" component={medicamentosSreen} />
        <Stack.Screen name="Alimentos" component={AlimentosScreen} />
        <Stack.Screen name="Accesorios" component={AccesoriosScreen} />
        <Stack.Screen name="Higiene" component={HigieneScreen} />
        <Stack.Screen name="Placas" component={PlacasScreen} />
        <Stack.Screen name="Vacunas" component={VacunasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  image_category: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  text_category: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '200',
  },
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
  image_cards: {
    width: 50,
    height: 50,
  },
  sections: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  cards_category: {
    width: '60%',
  },
  text_cards: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 15,
  },
});
