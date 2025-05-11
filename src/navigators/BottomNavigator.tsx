import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GiftScreen from "../screens/GiftScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomBarNavigation from "./CustomBarNavigation";

const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5D38BE",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Getir"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <CustomBarNavigation />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Gifts"
        component={GiftScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="gift" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
