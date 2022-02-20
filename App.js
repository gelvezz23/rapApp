import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserList from "./screens/UserList";
import UserDetailScreen from "./screens/UserDetailScreen";
import CreateUserScreen from "./screens/CreateUserScreen";
import Words from "./screens/Words";
import Home from "./screens/Home";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ title: "Bienvenidos" }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Bienvenidos" }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Bienvenidos" }}
      />

      <Stack.Screen
        name="Words"
        component={Words}
        options={{ title: "Lista de freestylers" }}
      />
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{ title: "Lista de freestylers" }}
      />
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ title: "Crear" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "detalles" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavigationScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
