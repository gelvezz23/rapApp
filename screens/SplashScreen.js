import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

function SplashScreen({ navigation }) {
  const next = () => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  };

  useEffect(() => {
    next();
  }, []);

  const image = { uri: "./../assets/splash2.png" };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./../assets/splash2.png")}
        style={styles.image}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});

export default SplashScreen;
