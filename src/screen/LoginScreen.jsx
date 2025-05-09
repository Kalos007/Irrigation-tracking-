import { StyleSheet, Text,TextInput,TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { color } from '../utils/color'
import HomeScreen from './HomeScreen'
import { useNavigation } from '@react-navigation/native'
import { useState ,React } from 'react'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [secureEntery,setSecureEntery]=useState(true);
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
              secureTextEntry={secureEntery}
             placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={() => setSecureEntery((prev)=> !prev)}>
             <SimpleLineIcons name={"eye"} size={30} color={"secondary"} />
             </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
     </View>
     <View style={styles.LoginContainer}>
        <TouchableOpacity style={styles.confirmLogin} onPress={() => navigation.navigate("HomePage")}>
            <Text style={styles.wordLogin}>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.DontHavAccountContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{fontSize: 16, color: "black", fontWeight: "bold"}}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
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
        marginVertical: 10,        
    },
    input:{
        flex:1,
        paddingHorizontal: 10,
        fontSize: 16,

    },
    forgotPasswordText:{
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        marginTop: 5,
        textAlign: "right",
        marginRight: 30,
    },
    LoginContainer:{      
        height: 50,
        width: "85%",
        backgroundColor: "black",
        borderWidth: 1,
        borderColor: "secondary",
        borderRadius: 100,
        alignItems: "center",
        flexDirection:"row",
        paddingHorizontal:20,
        marginVertical: 10,
        marginTop: 30,
        marginLeft: 30,
    },
    confirmLogin:{
        flex:1,
        paddingHorizontal: 10,
        fontSize: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    wordLogin:{
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
    DontHavAccountContainer:{
        marginTop: 30,
        marginLeft: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        
        //backgroundColor: "red",
    },
    dontHaveAccountText:{
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    },




})