import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { CategoryProps } from "../../../types";
import { screenWidth } from "../../utils/constants";

interface CategoryItemProps {
  item: CategoryProps;
}

export default function CategoryItem({ item }: CategoryItemProps) {
  console.log(item);
  return (
    <TouchableOpacity
      onPress={() => console.log(item.image)}
      style={{ width: screenWidth * 0.23, height: screenWidth * 0.23 }}
      className="flex flex-col items-center justify-between"
    >
      <Image
        source={item?.image}
        style={{ width: screenWidth * 0.18, height: screenWidth * 0.18 }}
      />
      <Text className="text-xs mb-7">{item.name}</Text>
    </TouchableOpacity>
  );
}
