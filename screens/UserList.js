import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "./../database/firebase";
import { ListItem, Avatar, Badge, Header } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function UserList({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = route.params.username;

  useEffect(() => {
    firebase.database.collection("User").onSnapshot((querySnapshot) => {
      const tempUsers = [];

      querySnapshot.docs.forEach((doc) => {
        const { name, aka, points } = doc.data();
        tempUsers.push({
          id: doc.id,
          name,
          aka,
          points,
        });
      });
      setUsers(tempUsers);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  const avatar =
    "https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/46426348_249345625760794_6132522951414644736_n.png?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeE2TLzxAHlbGYb-ZcRhVTtUZbpxpWLH8tFlunGlYsfy0dp-hfUZpUww7aKvRe-BTRzuiajAXkmC0ErcgwMkrdL8&_nc_ohc=nHS7bfswPd0AX-CXv02&_nc_ht=scontent.fbog4-1.fna&oh=c2069e741a2ef5322da84b5a1ecd71e2&oe=60A14AEE";

  return (
    <>
      <ScrollView style={styles.container}>
        <Header
          placement="left"
          containerStyle={{ backgroundColor: "#242526" }}
          statusBarProps={{ barStyle: "light-content" }}
          barStyle="light-content"
        >
          {username === "admin" && (
            <Button
              title="Crear nuevo"
              onPress={() => navigation.navigate("CreateUserScreen")}
            />
          )}

          <Button title="Salir" onPress={() => navigation.navigate("Home")} />
          <View style={styles.title}>
            <Text style={styles.text}>Lista de Freestylers</Text>
          </View>
        </Header>

        {users.map((person) => {
          return (
            <ListItem
              key={person.id}
              bottomDivider
              onPress={() => {
                navigation.navigate("UserDetailScreen", {
                  personId: person.id,
                  username: username,
                });
              }}
              linearGradientProps={{
                colors: ["#1c1e21", "#090a11"],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient}
            >
              <Avatar
                source={{
                  uri: avatar,
                }}
                rounded
              />
              <ListItem.Content>
                <ListItem.Title style={{ color: "white" }}>
                  {person.aka}
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: "grey" }}>
                  {person.name}
                </ListItem.Subtitle>
              </ListItem.Content>
              <Badge
                value={person.points}
                textStyle={{ color: "white" }}
                containerStyle={{ marginTop: -20 }}
              />
              <ListItem.Chevron color="white" />
            </ListItem>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1e21",
  },
  listContent: {
    backgroundColor: "black",
    color: "white",
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

export default UserList;
