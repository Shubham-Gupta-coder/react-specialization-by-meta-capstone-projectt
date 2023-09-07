import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.heroSection}>
        <View style={{ flexDirection: "row" }}>
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
        <View style={styles.inputBox} >
          <Image source={require("../assets/search.png")} style={{ width: 24, height: 24, objectFit: "contain" }} />
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: "#1C4D50",
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
  input: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    padding: 10,
    width: "92%",
    height: "45px",
    borderRadius: 25,
    backgroundColor: "#FFF",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    borderRadius: 25,
    backgroundColor: "#FFF",
    marginTop: 10,
  },
});