import {View, Text} from 'react-native';
import React from 'react';
import {Akira} from 'react-native-textinput-effects';
import {Card, Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
      }}>
      <View style={{width: '80%'}}>
        <Card containerStyle={{borderRadius:25, elevation:15, shadowOffset:{width:100, height:100}, shadowColor:'blue'}}>
          <Akira
            label={'Nombre'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
          />
           <Akira
            label={'Código postal'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
          />
           <Akira
            label={'Dirección'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
          />
           <Akira
            label={'Teléfono'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
          />
          <Akira
            label={'Email'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
          />
          <Akira
            label={'Password'}
            // this is used as active and passive border color
            borderColor={'#a5d1cc'}
            inputPadding={16}
            labelHeight={18}
            labelStyle={{color: '#ac83c4'}}
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
          <Button type="outline" title={'Enviar'} titleStyle={{color:'blue'}} buttonStyle={{marginVertical:10, borderRadius:15, borderColor: 'red'}} onPress={()=>navigation.navigate('home')} />
        </Card>
      </View>
    </View>
  );
};

export default RegisterScreen;
