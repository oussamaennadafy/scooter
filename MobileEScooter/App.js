import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// import Home from './Screens/Home'
// import LoginScreen from "./Screens/Login";
// import RegisterScreen from './Screens/Register'

import MainContainer from "./Navigation/MainContainer";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  header:{
    headerStyle: { backgroundColor: 'white' },
    headerTintColor: 'blue',
    headerTitleStyle: { fontWeight: 'bold' },
    headerTitleAlign:'center'
  }
});
