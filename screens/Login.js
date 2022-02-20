import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Header, Input } from "react-native-elements";

function Login({ navigation }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <Header
        placement="left"
        containerStyle={{ backgroundColor: "#1c1e21" }}
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
      ></Header>
      <View style={styles.container}>
        <Input
          style={styles.inputGroup}
          placeholder="Nombre de usuario"
          onChangeText={(value) => handleChange("username", value)}
        />
        <Input
          style={styles.inputGroup}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(value) => handleChange("password", value)}
        />
        <Text
          style={styles.text}
          onPress={() =>
            navigation.navigate("UserList", {
              username: user.username,
              password: user.password,
            })
          }
        >
          Ingresar
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1e21",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
  },
  inputGroup: {
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  text: {
    width: 200,
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    margin: 5,
    color: "#888",
    fontSize: 16,
  },
});

export default Login;
