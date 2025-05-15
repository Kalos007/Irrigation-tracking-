import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SignupScreen from "./src/screen/SignupScreen";
import HomePage from "./src/screen/HomePage";
import OtpPge from "./src/screen/OtpPage";
import NewPassword from "./src/screen/NeewPassword";
import EmailPage from "./src/screen/EmaiilPage";


const Stack =  createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen  name="OtpPage" component={OtpPge}/>
        <Stack.Screen name="NewPassword" component={NewPassword}/>
        <Stack.Screen name="EmailPage" component={EmailPage}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});