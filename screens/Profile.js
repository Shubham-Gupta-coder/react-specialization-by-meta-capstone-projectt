import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({navigation}) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const submitButtonClick = async () => {
    try {
      await AsyncStorage.setItem(
        nameValue,
        JSON.stringify({
          name: nameValue,
          email: emailValue,
        })
      );
      const data = await AsyncStorage.getItem(nameValue);
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

  const logout = () => {
    AsyncStorage.clear();
    navigation.replace("Greet");
  }

  const getKeys = async () => {
    let element;
    const mykeys = await AsyncStorage.getAllKeys();
    for (let i = 0; i < mykeys.length; i++) {
      element = mykeys[i];
    }

    const key = element;
    const value = await AsyncStorage.getItem(key);
    const data = JSON.parse(value);
    console.log(data);
    setNameValue(data.name);
    setEmailValue(data.email);

  };
  useEffect(() => {
    setTimeout(() => {
      getKeys();
    }, 2000);
  }, []);

  return (
    <View styles={styles.main}>
      <View
        style={{
          width: "95%",
          height: "98%",
          alignSelf: "center",
          marginTop: 10,
          borderColor: "#000000a0",
          borderWidth: 1,
          borderRadius: 25,
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Personal Information
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center", marginRight: 100 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Avatar</Text>
            <Image source={require("../assets/avatar.png")} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#1C4D50",
              padding: 10,
              borderRadius: 10,
              width: 100,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Text
              style={{ color: "white", fontWeight: "semibold", fontSize: 20 }}
            >
              Change
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#000",
              padding: 10,
              borderRadius: 10,
              borderWidth: 2,
              width: 100,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "black", fontWeight: "semibold", fontSize: 20 }}
            >
              Remove
            </Text>
          </TouchableOpacity>
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
          style={{
            backgroundColor: "#FFC700",
            padding: 10,
            borderRadius: 10,
            width: "80%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 200,
            marginHorizontal: "10%",
          }}
          onPress={() => {
            logout()
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Logout
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: "10%",
            width: "80%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#1C4D50",
              padding: 10,
              borderRadius: 10,
              width: 100,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
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
              style={{ color: "white", fontWeight: "semibold", fontSize: 20 }}
            >
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: "#000",
              padding: 10,
              borderRadius: 10,
              borderWidth: 2,
              width: 100,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              getKeys()
            }}
          >
            <Text
              style={{ color: "black", fontWeight: "semibold", fontSize: 20 }}
            >
              Discard
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    width: "100%",
  },
  formContainer: {
    padding: 5,
    marginVertical: 10,
  },
  inputText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "500",
  },
  inputTextInput: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    width: "100%",
    height: "50px",
    padding: 5,
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
