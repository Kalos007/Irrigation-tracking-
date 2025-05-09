import { StyleSheet, Text, View ,TextInput,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import{ useNavigation } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import { color } from '../utils/color'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useState ,React} from 'react'

const SignupScreen = () => {
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
                     <View style={styles.inputContainer}>
                      <Ionicons name={"Password-outline"} size={30} color={"secondary"} />
                      <TextInput
                       style={styles.input}
                       placeholder="Confirm your Password"

                       secureTextEntry={secureEntery}
                      placeholderTextColor="#999"
                     />
                     <TouchableOpacity onPress={() => setSecureEntery((prev)=> !prev)}>
                      <SimpleLineIcons name={"eye"} size={30} color={"secondary"} />
                      </TouchableOpacity>
                     </View>

              </View>
              <View style={styles.SignupContainer}>
                 <TouchableOpacity style={styles.confirmSignup} onPress={() => navigation.navigate("Login")}>
                     <Text style={styles.wordSignUp}>SignUp</Text>
                 </TouchableOpacity>
                 </View>
     </View>
     
   )
 };
 

export default SignupScreen

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
    headingText:{
        fontSize: 30,
        color: "black",
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 30,
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
    SignupContainer:{
        flexDirection: 'row',
        borderWidth:3,
        height:50,
        width: '82%',
        borderColor: 'black',
        borderRadius: 100 ,
        marginTop: 28,
        marginLeft: 30,
        marginRight: 30,
    },
    confirmSignup:{
        backgroundColor: 'black', // Tomato
        padding: 10,
        borderRadius:98,
        marginRight: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    wordSignUp:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
    

})