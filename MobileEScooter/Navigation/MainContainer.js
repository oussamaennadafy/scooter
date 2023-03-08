import {StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './Screens/Home'
import LoginScreen from './Screens/Login'
import HistoryScreen from './Screens/History';
import Logout from './components/Logout';
import RegisterScreen from './Screens/Register';

// Screen Names
const homeScreen = 'Home'
const loginScreen = 'Login'
const historyScreen = 'History'
const logout = 'Logout'
const register = 'Register'

const Tab = createBottomTabNavigator()

const MainContainer = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(()=>{
        const checkAuthentication = async () => {
            const logged = await AsyncStorage.getItem('Token');
            if (logged) {
              setAuthenticated(true);
            }
          };
        checkAuthentication()
    },[authenticated])

  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName={loginScreen}
        screenOptions={
            ({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let rn = route.name
                if(rn=== homeScreen){
                    iconName = focused ? 'map' : 'map'
                }

                if(rn === loginScreen){
                    iconName = focused ? 'login' : 'login'
                }

                if(rn === historyScreen){
                    iconName = focused ? 'list' : 'list'
                }
                if(rn === logout){
                    iconName = focused ? 'logout' : 'logout'
                }
                return <SimpleLineIcons name={iconName} size={size} color={color} />
            },
            activeTintColor: '#9146ff',
            inactiveTintColor: 'grey',
            labelStyle:{paddingBottom:10, fontSize:10},
            tabBarStyle: {padding: 10,height:70},
        })

        }
        >
            <Tab.Screen name={homeScreen} component={Home} />
            <Tab.Screen name={historyScreen} component={HistoryScreen} />
                <Tab.Screen name={loginScreen} component={LoginScreen} />
                <Tab.Screen name={register} component={RegisterScreen} />
            {/* {
                authenticated?
                <>
                </>
                :
            } */}
                <Tab.Screen name={logout} component={Logout} onPress={()=>setAuthenticated(false)}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer  