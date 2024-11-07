import { View, Text, Image } from "react-native";
import React from "react";
import { colorful } from "../Utils/Colors";

const Banner = () => {
  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Promotions</Text>
      <View
        style={{
          backgroundColor: colorful.secondary,
          height: 150,
          borderRadius: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 12 }}>
          <Text style={{ fontSize: 15, color: "white" }}>Todays Offer</Text>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Free box of fries
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            on all Orders above $150
          </Text>
        </View>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/welcom.png")}
        />
      </View>
    </View>
  );
};

export default Banner;
