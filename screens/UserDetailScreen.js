import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Header, Input } from "react-native-elements";
import firebase from "./../database/firebase";

function UserDetailScreen({ route, navigation }) {
  const initialState = {
    id: "",
    name: "",
    aka: "",
    points: "",
  };
  const [person, setPerson] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const personId = route.params.personId;
  const username = route.params.username;

  useEffect(() => {
    getUserById(personId);
  }, []);

  const getUserById = async (id) => {
    const query = firebase.database.collection("User").doc(id);
    const data = await query.get();
    const user = data.data();
    setPerson({ ...user, id: id });
    setLoading(false);
  };

  const handleChange = (name, value) => {
    setPerson({ ...person, [name]: value });
  };

  const updatePerson = async () => {
    const query = firebase.database.collection("User").doc(personId);
    await query.set({
      name: person.name,
      aka: person.aka,
      points: person.points,
    });
    setPerson(initialState);
    navigation.navigate("UserList");
  };
  const deletePerson = async () => {
    const query = firebase.database.collection("User").doc(personId);
    await query.delete();
    navigation.navigate("UserList");
  };

  const openConfirmation = () => {
    Alert.alert("Eliminar freestyler", " ¿ Esta seguro de eliminar ? ", [
      { text: "Yes", onPress: () => deletePerson() },
      { text: "No", onPress: () => console.log("false") },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Header
        placement="left"
        containerStyle={{ backgroundColor: "#242526" }}
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
      >
        <View style={styles.button}>
          <Button
            title="Volver"
            onPress={() => navigation.navigate("UserList")}
          />
        </View>
        {username === "admin" && (
          <View style={styles.button}>
            <Button
              color="red"
              title="Eliminar"
              onPress={() => openConfirmation()}
            />
          </View>
        )}
      </Header>
      <View style={styles.inputGroup}>
        <Input
          style={{ selectionColor: "#428AF8", color: "white" }}
          defaultValue={person.name}
          placeholder="Nombre"
          onChangeText={(value) => handleChange("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          style={{ selectionColor: "#428AF8", color: "white" }}
          defaultValue={person.aka}
          placeholder="A K A"
          onChangeText={(value) => handleChange("aka", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          style={{ selectionColor: "#428AF8", color: "white" }}
          defaultValue={person.points}
          placeholder="Puntos"
          onChangeText={(value) => handleChange("points", value)}
        />
      </View>
      {username === "admin" && (
        <View style={styles.button}>
          <Button
            color="green"
            title="Actualizar"
            onPress={() => updatePerson()}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1e21",
  },

  inputGroup: {
    flex: 1,
    padding: 5,
    margin: 15,
    color: "white",
    borderBottomColor: "#ccc",
  },
  button: {
    marginTop: 15,
  },
});

export default UserDetailScreen;
