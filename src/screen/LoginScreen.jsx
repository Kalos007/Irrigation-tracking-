import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../utils/color'
import HomeScreen from './HomeScreen'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack(HomeScreen)}>
            <Ionicons name="arrow-back" size={30} color="White"/>
        </TouchableOpacity>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },
    backButtonWrapper:{
        height:"60",
        width:"60", 
        backgroundColor:"gray",
        borderRadius:30
    }
    

})