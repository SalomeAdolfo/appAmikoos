import { View, Text, FlatList, Image, StyleSheet} from 'react-native'
import React,{useEffect,useState} from 'react'
import baseUrl from '../routes/api'
import { Card } from 'react-native-elements';

const url = '/api/ventas';
const VentasScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);

    const getVentas = async ()=>{
        try{
            const res = await fetch(baseUrl+url);
            const json = await res.json();
            setInfo(json.data);
            console.log(json.data)
        }catch(e){
            alert(e)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getVentas();
    },[]);
  return (
    <View>
        <FlatList 
        data={info}
        keyExtractor={({id},index) => id}
        renderItem={({item})=>(
            <View style={{...styles.main}}>
                <Card containerStyle={{...styles.card}}>
                    <Image source={{uri:'https://www.esic.edu/sites/default/files/rethink/ff01cba7-marketing-y-ventas-roi.jpg'}} style={{width:200, height:200, alignSelf:'center'}}/>
                    <Text style={{...styles.text}}>{item.fecha}</Text>
                    <Text style={{...styles.text}}>${item.monto}</Text>
                    <Text style={{...styles.text}}>{item.estado_pago}</Text>
                </Card>
            </View>
        )}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    text:{
        color:'green',
        alignSelf:'center',
        fontSize:20
    },
    card:{
        borderRadius: 25,
        elevation: 50,
        backgroundColor: 'white'
    },
    main:{
       backgroundColor:'white' 
    }
})
export default VentasScreen