import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react';
import baseUrl from '../routes/api';
import { Card } from 'react-native-elements';

const url = '/api/productos'

const StocksScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    const getStocks =  async ()=>{
        try {
            const res = await fetch(baseUrl+url);
            const json = await res.json();
            setInfo(json.data);
            console.log(json.data)
        } catch (error) {
            alert(error)
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getStocks();
    },[])
  return (
    <View>
      <FlatList 
      data={info}
      keyExtractor={({id},index) => id}
      renderItem={({item})=> (
          <View>
              <Card containerStyle={{borderRadius:25}}>
                  <Image source={{uri:'https://th.bing.com/th/id/R.205d0cd6c5e7c1b2e90f0120623d926b?rik=VW2aijnaV7Osxw&pid=ImgRaw&r=0'}} style={{width:200,alignSelf:'center', height:200}} />
                  <Text style={{...styles.text}}>{item.producto}</Text>
                  <Text style={{...styles.text}}>Precio: ${item.precio}</Text>
                  <Text style={{...styles.text}}>Stock: {item.stock}</Text>
              </Card>
          </View>
      )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'black',
        fontWeight: '300',
        alignSelf:'center'
    }
})
export default StocksScreen