import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SliderProps } from "../../../types";
import { pb } from "../../lib/pocketbase";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const localImages = [
  require("../../../assets/getir/1.jpg"),
  require("../../../assets/getir/2.jpg"),
  require("../../../assets/getir/3.jpg"),
  require("../../../assets/getir/4.jpg"),
];

export default function () {
  const [sliders, setSliders] = useState(localImages);
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <FlatList
      data={sliders}
      renderItem={({ item }) => (
        <View style={{ width: screenWidth, height: screenHeight * 0.32 }}>
          <Image
            source={item}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
      )}
      horizontal
      keyExtractor={(item, index) => index.toString()}
    ></FlatList>
  );
}
