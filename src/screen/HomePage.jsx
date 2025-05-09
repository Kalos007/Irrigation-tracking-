import { ScrollView, StyleSheet, ImageBackground,Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.container}>

      
      
      <View style={styles.containerpatch}>
      
        
      </View>
      
    </View>
  )
};

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        //marginBottom: 30,
        //marginTop: 30,

    },
    containerpatch: {
        width: '90%',
        height: 200,
        backgroundColor: 'teal',
        //borderWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        
    },
    greenleaf: {
        width: '100%',  // or specific width like 300
        height: '100%',    // set your desired height
        justifyContent: 'center', // centers text vertically
        alignItems: 'center',     // centers text horizontally
        borderRadius: 50,
        borderWidth: 0,
        borderColor: "",
         // use your color variable
        //overflow: 'hidden',       // needed for borderRadius to work
    },

})