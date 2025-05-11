import { View, FlatList, Image } from "react-native";
import React, { useRef, useState } from "react";
import { screenHeight, screenWidth } from "../../utils/constants";
import { sliderImages } from "../../utils/fetchData";

export default function SliderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThresold: 50 });

  return (
    <FlatList
      horizontal
      data={sliderImages}
      renderItem={({ item }) => (
        <View style={{ width: screenWidth, height: screenHeight * 0.32 }}>
          <Image
            source={item}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
      )}
    />
  );
}
