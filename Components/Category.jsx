import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colorful } from "../Utils/Colors";



const Category = () => {
  const [selected, setselected] = useState(0);
  const cats = [
    "All",
    "Burger",
    "Pizza",
    "Desserts",
    "Drinks",
    "Fruits",
    "Vegetables",
    "Beverages",
    "Other",
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cats}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setselected(index);
          }}
          activeOpacity={0.9}
          style={{ marginRight: 10 }}
        >
          <View
            style={{
              width: 70,
              height: 80,
              backgroundColor: selected === index ? colorful.primary : "#E3E3E3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../assets/welcom.png")}
            />
          </View>

          <Text
            style={{
              marginTop: 5,
              textAlign: "center",
              color: selected == index ? colorful.primary : "grey",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
