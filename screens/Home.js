import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

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
        <View style={styles.inputBox}>
          <Image
            source={require("../assets/search.png")}
            style={{ width: 24, height: 24, objectFit: "contain" }}
          />
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.nav}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>
          Order For Delivery
        </Text>
        <ScrollView horizontal style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#D9D9D9",
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: "#1C4D50", fontWeight: 600 }}>
              {" "}
              Starters
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#D9D9D9",
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: "#1C4D50", fontWeight: 600 }}>
              {" "}
              Mains
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#D9D9D9",
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: "#1C4D50", fontWeight: 600 }}>
              {" "}
              Desserts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#D9D9D9",
              borderRadius: 50,
              marginRight: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: "#1C4D50", fontWeight: 600 }}>
              {" "}
              Drinks
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderBottomColor: "#00000015",
            borderBottomWidth: 1,
            marginHorizontal: 10,
            height: 100,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "500", fontSize: 20 }}>
                Greek Salad
              </Text>
              <Text style={{ fontSize: 16 }}>The Famous Greek Salad</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>$ 12.99</Text>
            </View>
          </View>
          <Image source={require("../assets/food1.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderBottomColor: "#00000015",
            borderBottomWidth: 1,
            marginHorizontal: 10,
            height: 100,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "500", fontSize: 20 }}>Brushetta</Text>
              <Text style={{ fontSize: 16 }}>Made From Grilled Bread</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>$ 7.99</Text>
            </View>
          </View>
          <Image source={require("../assets/food2.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderBottomColor: "#00000015",
            borderBottomWidth: 1,
            marginHorizontal: 10,
            height: 100,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "500", fontSize: 20 }}>
                Grilled Fish
              </Text>
              <Text style={{ fontSize: 16 }}>Barbequed catch of the day.</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>$ 19.99</Text>
            </View>
          </View>
          <Image source={require("../assets/food3.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderBottomColor: "#00000015",
            borderBottomWidth: 1,
            marginHorizontal: 10,
            height: 100,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "500", fontSize: 20 }}>Pasta</Text>
              <Text style={{ fontSize: 16 }}>
                Penne with tomato sauce, garlic etc.
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>$ 18.99</Text>
            </View>
          </View>
          <Image source={require("../assets/food4.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            borderBottomColor: "#00000015",
            borderBottomWidth: 1,
            marginHorizontal: 10,
            height: 100,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontWeight: "500", fontSize: 20 }}>Lemon Dessert</Text>
              <Text style={{ fontSize: 16 }}>
                Light and fluffy
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>$ 6.99</Text>
            </View>
          </View>
          <Image source={require("../assets/food5.png")} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
  nav: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
});
