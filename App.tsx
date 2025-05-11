import "./global.css";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/navigators/BottomNavigator";
import { View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View className="mt-10" />
      <StatusBar style="auto" />
      <BottomNavigator />
    </NavigationContainer>
  );
}
