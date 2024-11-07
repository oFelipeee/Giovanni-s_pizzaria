import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";

import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();
  const food = [
    {
      id: 1,
      name: "Pizza",
      price: 250,
      image:
        "https://www.food2fork.com/wp-content/uploads/2018/05/chicken-1.jpg",
    },
    {
      id: 2,
      name: "Veg Pizza",
      price: 120,
      image: "https://www.food2fork.com/wp-content/uploads/2018/05/beef-1.jpg",
    },
    {
      id: 3,
      name: "Burger",
      price: 100,
      image: "https://www.food2fork.com/wp-content/uploads/2018/05/pork-1.jpg",
    },
    {
      id: 4,
      name: "Sandwich",
      price: 100,
      image: "https://www.food2fork.com/wp-content/uploads/2018/05/beef-1.jpg",
    },
  ];
  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Popular</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={food}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", { data: item });
            }}
            style={{
              backgroundColor: "#E3E3E3",
              width: 150,
              height: 200,
              marginRight: 20,
              borderRadius: 20,
              paddingHorizontal: 20,

              paddingVertical: 20,
              gap: 10,
            }}
          >
            <Image
              style={{ width: 85, height: 85, alignSelf: "center" }}
              source={require("../assets/welcom.png")}
            />
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: colorful.primary,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                ${item.price}
              </Text>
              <Ionicons name="ios-add-circle" size={24} color="green" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Fooditems;
