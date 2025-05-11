import { View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "../../utils/fetchData";

export default function CategoryList() {
  return (
    <View className="bg-getirBg p-4">
      <View className="flex flex-row  flex-wrap w-full">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}
