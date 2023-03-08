import React,{useEffect,useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import moment from 'moment';




const HistoryScreen = () => {
  const [Travels, setTravels] = useState([])
  const getMytravels=async()=>{
    setTravels([])
    const token = await AsyncStorage.getItem("Token");
    const decodedToken = jwt_decode(token);
    const id = decodedToken.id;
    axios.get(`http://192.168.9.25:3000/travel/${id}`)
    .then(res=>{
      res.data.travels.forEach(element => {
        setTravels(current =>[...current,element])
      })
    })
    .catch(err=>console.log(err))

  }
  const Check=()=>{
    // add logic to show pos on the home map
  }
  useEffect(()=>{
    getMytravels()
  },[])
  return (
    <View style={styles.container}>
    {
      Travels?
      <FlatList
        data={Travels}
        renderItem={({item})=>
        <Card containerStyle={styles.card}>
          <Card.Title>{item.i} {item.Title}</Card.Title>
          <Card.Divider />
          <Text style={styles.description}>
            Tavel Date :   
            {moment(item.createdAt).format('L')+" "+moment(item.createdAt).format('LT')}
          </Text>
          <Button
            title="Show On map"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={()=>Check()}
          />
        </Card>
        }
      />:
      <Text>No Posts</Text>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  card: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  description: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00bfff',
    borderRadius: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
});

export default HistoryScreen;
