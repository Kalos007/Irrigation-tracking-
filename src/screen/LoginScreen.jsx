import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import axios from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:8081/api/v1/login', {
        email,
        password
      });

      console.log('Login successful:', response.data);
      navigation.navigate('HomePage');
      
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Login failed. Please try again.';
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }
      
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButtonWrapper} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>

      <View style={styles.containerHey}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={30} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={30} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            secureTextEntry={secureEntry}
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureEntry(prev => !prev)}>
            <SimpleLineIcons name="eye" size={30} color="#888" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.LoginContainer}>
        <TouchableOpacity 
          style={styles.confirmLogin} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.wordLogin}>Login</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.DontHavAccountContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{fontSize: 16, color: "black", fontWeight: "bold"}}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backButtonWrapper: {
    height: 60,
    width: 60, 
    backgroundColor: "gray",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 30,
  },
  containerHey: {
    marginTop: 30,
    marginLeft: 30,
  },
  headingText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  formContainer: {
    marginTop: 30,
    marginLeft: 30,
  },
  inputContainer: {
    height: 50,
    width: "90%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 10,        
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "right",
    marginRight: 30,
  },
  LoginContainer: {      
    height: 50,
    width: "85%",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 10,
    marginTop: 30,
    marginLeft: 30,
  },
  confirmLogin: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  wordLogin: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  DontHavAccountContainer: {
    marginTop: 30,
    marginLeft: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});

export default LoginScreen;