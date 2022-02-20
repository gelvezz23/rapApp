import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

function Home({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Words", {
              time: 5,
            });
          }}
        >
          Palabras cada 5 Sg
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Words", {
              time: 10,
            });
          }}
        >
          Palabras cada 10 Sg
        </Text>

        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Iniciar sesion
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
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
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

export default Home;
