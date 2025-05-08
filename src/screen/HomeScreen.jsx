import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground  source={require("../assets/green.png")} style={styles.greenleaf}>
        <Text style={styles.title}>Welcome to GreenLeaf</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.buttonLogin ,{backgroundColor:"primary"}]} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonLogin ,{backgroundColor:"black",width:"53%",borderWidth:3.5,borderColor:"white",}]} onPress={() => navigation.navigate('buttonSignup')}>
          <Text style={styles.buttonTextLogin}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "green", 
        position: 'relative', // allows absolute positioning of children
    },
    greenleaf: {
        width: '100%',  // or specific width like 300
        height: '100%',    // set your desired height
        justifyContent: 'center', // centers text vertically
        alignItems: 'center',     // centers text horizontally
        borderRadius: 100,
        borderWidth: 0,
        borderColor: "", // use your color variable
        //overflow: 'hidden',       // needed for borderRadius to work
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // use your color variable
         // needed for borderRadius to work
    },
    title: {
        color: 'white',
        fontSize: 29,
        fontWeight: 'bold',
        fontFamily: 'poppins-Bold',
        fontStyle: 'poppins-Bold',
        textShadowColor: 'rgba(243, 237, 237, 0.75)',
        //textShadowOffset: {width: -1, height: 1},
        //textAlign: 'center',
        textShadowRadius: 100,
        marginTop:"59%"// optional for better spacing
    },
    buttonContainer: {
        flexDirection: 'row',
        borderWidth:3,
        height:60,
        width: '90%',
        borderColor: 'white',
        borderRadius: 100 ,
        marginTop: 290,
    },
    buttonLogin: {
        backgroundColor: 'black', // Tomato
        padding: 10,
        borderRadius:98,
        marginRight: 10,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    buttonSignup: {
        backgroundColor: '#4682B4', // SteelBluem
        padding: 10,
        borderRadius: 5,

    },
    buttonTextLogin: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonTextSignup: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
})