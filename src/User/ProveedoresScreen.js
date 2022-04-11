import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Card} from 'react-native-elements';
import baseURL from '../routes/api';

const url = '/api/proveedores';
const ProveedoresScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getProveedores = async () => {
    try {
      const res = await fetch(baseURL + url);
      const json = await res.json();
      setInfo(json.data);
      console.log(json.data)
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProveedores();
  }, []);
  return (
    <View>
      <FlatList
        data={info}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <View>
            <Card>
              <Image
                source={{
                  uri: 'https://th.bing.com/th/id/R.9c901199475873edfa9a22af9046791e?rik=kWWHAPP5WDd5yA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-oFLx_6l5XD4%2fT_1f89Gf_OI%2fAAAAAAAAAgk%2fK8vP0VN621c%2fs1600%2fProveedor.jpg&ehk=HeL2NWHdy83O9QJPpFNWSCrbQTDeGAu681NUSJ5wd5Y%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
                }}
                style={{width: 100, height: 100, alignSelf: 'center'}}
              />
              <Text style={{...styles.text}}>Teléfono: {item.telefono}</Text>
              <Text style={{...styles.text}}>Empresa: {item.nombre}</Text>
              <Text style={{...styles.text}}>Codigo postal: {item.codigopostal}</Text>
              <Text style={{...styles.text}}>Dirección: {item.direccion}</Text>
              <Text style={{...styles.text}}>Email: {item.email}</Text>
            </Card>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 15,
  },
});
export default ProveedoresScreen;
