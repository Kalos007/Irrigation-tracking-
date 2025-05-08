import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from '../utils/color'
import HomeScreen from './HomeScreen'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack(HomeScreen)}>
            <Ionicons name="arrow-back" size={40} color="White"/>
        </TouchableOpacity>
        <Text style={{fontSize:30,marginTop:50,alignItems:"center"}}>Login</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
        //justifyContent:"center",
        //marginTop: 30,
        //marginLeft:30,
    },
    backButtonWrapper:{
        height:"60",
        width:"60", 
        backgroundColor:"gray",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 30,
        marginLeft: 30,
    }
    

})