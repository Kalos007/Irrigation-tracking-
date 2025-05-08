import { StyleSheet, Text,TextInput,TouchableOpacity, View } from 'react-native'
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
     <View style={styles.containerHey}> 
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
     </View>
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
             <Ionicons name={"mail-outline"} size={30} color={"secondary"} />
             <TextInput
              style={styles.input}
              placeholder="Enter your Email"
             placeholderTextColor="#999"
            />
            </View>
            <View style={styles.inputContainer}>
             <Ionicons name={"Password-outline"} size={30} color={"secondary"} />
             <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              secureTextEntry={true}
             placeholderTextColor="#999"
            />
            </View>
     </View>
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
    },
    containerHey:{
        marginTop: 30,
        marginLeft: 30,
    },
    headingText:{
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
    },
    formContainer:{
        marginTop: 30,
        marginLeft: 30,
    },
    inputContainer:{
        height: 50,
        width: "90%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "secondary",
        borderRadius: 100,
        alignItems: "center",
        flexDirection:"row",
        paddingHorizontal:20,
        alignItems:"center",
        marginVertical: 15,        
    },
    input:{
        flex:1,
        paddingHorizontal: 10,
        fontSize: 16,
    }



})