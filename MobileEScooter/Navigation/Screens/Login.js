import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,Button ,ToastAndroid} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const isFocused = useIsFocused();

  // useEffect(()=>{
  //   if (authenticated) {
  //     navigation.navigate('Home')
  //   }
  //   checkAuthentication();
  // },[authenticated])
  
  const checkAuthentication = async () => {
    const logged = await AsyncStorage.getItem('Token');
    console.log(logged);
    if (logged) {
      setAuthenticated(true);
      navigation.navigate('Home')
    }else{
      navigation.navigate('Login')
    }
  };
  if (isFocused) {
    checkAuthentication()
  }
  const  validateInputes=()=>{
      if (!username || !password) {
        setError('All fields are required');
        return false 
    }
    else{
        setError('');
        return true
      }
  }
  const handleLogin = () => {
    if (validateInputes()) {
          axios.post('http://192.168.9.25:3000/auth/SignIn',{
          UserName:username,
          Password:password
        }).then(res=>{
          if (res.data.token) {

            AsyncStorage.setItem('Token',res.data.token,(error) => {
              if (error) {
                console.log('Error saving data: ', error);
              } else {
                console.log('Data saved successfully');
                setAuthenticated(true)
              }
            })
          }
        })
        .catch(err=>{
          console.log("eeeeee",err)
          ToastAndroid.showWithGravity(
            "incorrect info",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
          );
        })
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text >E-ScooTer Map</Text>
        <Image style={styles.logo} source={require('../../utils/images/Logo-Escooter.png')}></Image>
        {/* <Text style={styles.logo}>Logo</Text> */}
      </View>
      <View style={styles.formContainer}>
        <TextInput
        style={[styles.input, error && styles.errorInput]}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
        style={[styles.input, error && styles.errorInput]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.Link} onPress={() =>navigation.navigate('Register')}>
          <Text style={styles.LinkText}>Not a member</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    width: 200, 
    height: 200
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Link:{
    alignSelf:'flex-end',
    marginBottom:16,
  },
  LinkText:{
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000'
  }
});

export default LoginScreen;
