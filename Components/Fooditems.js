import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();

  // Array of products with additional items
  const products = [
    {
      id: '1',
      name: 'Pizza Calabresa',
      price: 90,
      image: 'https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1212512019.jpg',
      addons: [
        require('../assets/coca.png'),
        require('../assets/cheddar.png'),
        require('../assets/catupiry.png'),
      ],
    },
    {
      id: '2',
      name: 'X-Salada',
      price: 30,
      image: 'https://assets.unileversolutions.com/recipes-v2/106684.jpg',
      addons: [
        require('../assets/coca.png'),
      ],
    },
    {
      id: '3',
      name: 'Pizza Doce',
      price: 45,
      image: 'https://maisminas.org/wp-content/uploads/2022/12/pizza-scaled.jpg',
      addons: [
        require('../assets/mms.png'),      ],
    },
    {
      id: '4',
      name: 'Pizza Margherita',
      price: 55,
      image: 'https://www.donguilherme.com.br/assets/userfiles/archives/6405dff0d4d8d.jpg', // Replace with a valid image URL
      addons: [
        require('../assets/coca.png'),
        require('../assets/cheddar.png'),
        require('../assets/catupiry.png'),
      ],
    },

  ];

  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 , fontWeight: "bold"}}>Mais pedidos:</Text>

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