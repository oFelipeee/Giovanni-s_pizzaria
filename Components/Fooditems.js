import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";

import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();
  const products = [
    { id: '1', name: 'Pizza Calabresa', price: 90, image: 'https://static.vecteezy.com/system/resources/previews/028/882/831/non_2x/pizza-pizza-transparent-pizza-ai-generated-free-png.png' },
  ];

  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Popular</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", { data: item });
            }}
            style={{
              backgroundColor: "#D3D3D3",
              width: 150,
              height: 220,
              marginRight: 20,
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 20,
              gap: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontSize: 16, textAlign: "center" }}>{item.name}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: '100%',
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
