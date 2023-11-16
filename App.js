import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Greet from "./screens/Greet";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import GreetLoader from "./screens/GreetLoader";
import Profile from "./screens/Profile";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => (
            <View>
              <Image
                source={require("./assets/logo_header.png")}
                style={{ width: 170, height: 50, objectFit: "contain" }}
              />
            </View>
          ),
          headerTitleAlign: "center",
        }}
        initialRouteName={"GreetLoader"}
      >
        <Stack.Screen
          name="GreetLoader"
          options={{
            headerShown: false,
          }}
          component={GreetLoader}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation, route }) => ({
            headerRight: (props) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profile", { screen: "Profile" })
                }
              >
                <Image
                  source={require("./assets/avatar.png")}
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
              </TouchableOpacity>
            ),
            headerBackVisible: false,
            headerLeft: (props) => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <Image source={require("./assets/back.png")} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Greet"
          options={{
            headerTitle: () => (
              <View>
                <Image
                  source={require("./assets/logo_header.png")}
                  style={{ width: 170, height: 50, objectFit: "contain" }}
                />
              </View>
            ),
          }}
          component={Greet}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            headerRight: (props) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profile", { screen: "Profile" })
                }
              >
                <Image
                  source={require("./assets/avatar.png")}
                  style={{ width: 50, height: 50, objectFit: "contain" }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
