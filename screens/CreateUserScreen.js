import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { Header, Input } from "react-native-elements";
import firebase from "./../database/firebase";

function CreateUserScreen({ navigation }) {
  const [user, setUser] = useState({ name: "", aka: "", points: "" });

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    if (user.name === "") {
      alert("Please ingrese nombre");
    } else if (user.aka === "") {
      alert("Please ingrese AKA");
    } else if (user.points === "") {
      alert("Please ingrese los puntos");
    } else if (user.name && user.aka && user.points) {
      try {
        await firebase.database.collection("User").add(user);
        navigation.navigate("UserList");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header placement="left">
        <Button
          title="Volver"
          onPress={() => navigation.navigate("UserList")}
        />
        <View style={styles.title}>
          <Text style={styles.text}>Crear un Freestyler</Text>
        </View>
      </Header>
      <View style={styles.inputGroup}>
        <Input
          style={{ selectionColor: "#428AF8", color: "white" }}
          placeholder="Nombre"
          onChangeText={(value) => handleChange("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          style={{ selectionColor: "#428AF8", color: "white" }}
          placeholder="A K A"
          onChangeText={(value) => handleChange("aka", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          style={{ selectionColor: "#428AF8", color: "white" }}
          placeholder="Puntos"
          onChangeText={(value) => handleChange("points", value)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Registrar" onPress={() => handleSubmit()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1e21",
  },

  inputGroup: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  button: {
    margin: 15,
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default CreateUserScreen;
