import {
    Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Greet = ({ navigation }) => {
  
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const submitButtonClick = async () => {
      try {
      await AsyncStorage.setItem(nameValue, JSON.stringify({
        name: nameValue,
        email: emailValue,
      }));
        const data = await AsyncStorage.getItem(nameValue);
          console.log("Data stored successfully data is: ", JSON.parse(data));
          navigation.replace("Home");
        
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.heroSection}>
        <View
          style={{
            width: "70%",
          }}
        >
          <Text style={styles.primaryHeading}>Little Lemon</Text>
          <Text style={styles.secondaryHeading}>Chicago</Text>
          <Text style={styles.paragraph}>
            We are a family owned Mediterranean Restaurant, Focused on
            traditional recipes served with a modern twist.
          </Text>
        </View>
        <View style={styles.imageView}>
          <Image
            style={{
              width: 170,
              height: 100,
              objectFit: "contain",
            }}
            source={require("../assets/hero.png")}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>Name *</Text>
          <TextInput
            style={styles.inputTextInput}
            value={nameValue}
            onChangeText={setNameValue}
          ></TextInput>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>Email *</Text>
          <TextInput
            style={styles.inputTextInput}
            value={emailValue}
            onChangeText={setEmailValue}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitButtonClick}
        disabled={
          nameValue == " " ||
          emailValue == " " ||
          nameValue == "" ||
          emailValue == ""
            ? true
            : false
        }
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 32,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          NEXT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: "#1C4D50",
    flexDirection: "row",
    padding: 10,
  },
  imageView: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryHeading: {
    color: "#FFC700",
    fontSize: 42,
    fontWeight: "bold",
  },
  secondaryHeading: {
    color: "#FFC700",
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  paragraph: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
  },
  inputBox: {
    marginVertical: 10,
  },
  formContainer: {
    padding: 25,
    marginBottom: 50,
  },
  inputText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "500",
    paddingVertical: 10,
  },
  inputTextInput: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    padding: 10,
    width: "380px",
    height: "45px",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
  },
  submitButton: {
    backgroundColor: "#1C4D50",
    borderRadius: 25,
    width: 300,
    height: 75,
    alignSelf: "center",
    justifyContent: "center",
  },
});
