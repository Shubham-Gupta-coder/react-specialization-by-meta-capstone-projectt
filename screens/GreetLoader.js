import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GreetLoader = ({ navigation }) => {
    const getKeys = async () => {
    const mykeys = await AsyncStorage.getAllKeys();
      if (mykeys.length != 0) {
        navigation.replace("Home");
      }
      else {
        navigation.replace("Greet");
        }
  };
  useEffect(() => {
    setTimeout(() => {
      getKeys();
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFC700",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Image
        source={require("../assets/hero.png")}
        style={{
          width: 300,
          height: 200,
          objectFit: "contain",
          alignSelf: "center",
        }}
      />
      <Text style={styles.primaryHeading}>Little Lemon</Text>
      <Text style={styles.secondaryHeading}>Loading</Text>
    </View>
  );
};

export default GreetLoader;

const styles = StyleSheet.create({
  primaryHeading: {
    color: "#000",
    fontSize: 42,
    fontWeight: "bold",
    marginTop: 50,
  },
  secondaryHeading: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
  },
});
