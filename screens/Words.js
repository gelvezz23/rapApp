import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

import Palabras from "./../database/words.json";

export default function Words({ navigation, route }) {
  const time = route.params.time;
  const [number, setNumber] = useState(time);
  const [palabra, setPalabra] = useState("");
  const [palabras, setPalabras] = useState(Palabras.words);

  const getPalabra = async () => {
    const data = await palabras[
      Math.floor(Math.random() * palabras.length) - 1
    ];
    setPalabra(data);
    setPalabras(palabras.filter((items) => items !== data));
    console.log(palabras.length);
  };
  let intervalRef = useRef();
  const decreaseNum = () => setNumber((prev) => prev - 1);

  if (number < 0) {
    getPalabra();
    setNumber(time);
  }
  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [palabra]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <Header
        placement="left"
        containerStyle={{ backgroundColor: "#1c1e21" }}
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content"
      >
        <View style={styles.button}>
          <Button title="Volver" onPress={() => navigation.navigate("Home")} />
        </View>
      </Header>
      <View style={styles.container}>
        <Text style={{ color: "#888", fontSize: 30 }}>{number}</Text>
        <Text style={{ color: "white", fontSize: 60, fontWeight: "bold" }}>
          {palabra}
        </Text>
        {palabras.length === 1 ||
          (palabras.length === 2 && (
            <Button title="Salir" onPress={() => navigation.navigate("Home")} />
          ))}
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
});
