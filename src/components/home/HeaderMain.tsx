import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function HeaderMain() {
  return (
    <View className="flex  h-12 flex-row bg-yellow-400 items-center justify-between">
      <View className="w-10/12 h-12 px-4 py-1 flex-row flex items-center bg-white rounded-r-full">
        <Image source={require("../../../assets/house.png")} className="w-6 h-6" />
        <View className="flex-1 flex flex-row items-center ml-2 h-10">
          <Text className="text-xl font-bold">Ev</Text>
          <Text className="font-light text-sm ml-2">Cumhuriyet Meydanı Muratpaşa Antalya</Text>
        </View>
        <Entypo name="chevron-right" size={22} color={"#5D3EBD"} className="ml-auto" />
      </View>
      <View className="w-2/12">
        <Text className="text-sm text-getirColor text-center font-bold">TVS</Text>
        <Text className="text-xl text-getirColor text-center font-bold">15 dk.</Text>
      </View>
    </View>
  );
}
