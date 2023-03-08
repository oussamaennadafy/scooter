import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({navigation}) => {
    const isFocused = useIsFocused();

    const LogUserOut= async()=>{
        await AsyncStorage.removeItem('Token')  
        .then(() => {
            console.log('Item removed successfully');
            navigation.navigate('Login')
          })
          .catch((error) => {
            console.log('Error removing item:', error);
          });
    }
    if (isFocused) {
        LogUserOut()
    }
  return (
    <View style={styles.container}>
      <Text>Loading ...</Text>
    </View>
  )
}

export default Logout
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
  });