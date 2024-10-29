import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SliderProps } from "../../../types";
import { pb } from "../../lib/pocketbase";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function () {
  const [sliders, setSliders] = useState<SliderProps[]>([]);
  const [error, setError] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const records = await pb
          .collection("sliders")
          .getFullList<SliderProps>({
            sort: "-created",
          });
        setSliders(records);
      } catch (error: any) {
        setError(error.message);
        console.error("Error fetching sliders: ", error);
        console.error("Error details: ", JSON.stringify(error, null, 2));
      }
    };
    fetchSliders();
  }, []);

  return (
    <FlatList
      data={sliders}
      renderItem={({ item }) => (
        <View style={{ width: screenWidth, height: screenHeight * 0.32 }}>
          <Image
            source={{
              uri: `${apiUrl}/${item.collectionId}/${item.id}/${item.image}`,
            }}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
      )}
    ></FlatList>
  );
}
