import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";

import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();
  const products = [
    { id: '2', name: 'Pizza Vegana', price: 90, image: 'https://static.vecteezy.com/system/resources/previews/028/882/831/non_2x/pizza-pizza-transparent-pizza-ai-generated-free-png.png' },
    { id: '3', name: 'Turbo Burguer',  price: 90, image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
    { id: '4', name: 'Pizza Doce',  price: 90, image: 'https://www.designi.com.br/images/preview/11315989.jpg' },
    { id: '4', name: 'Pizza Calabresa',  price: 90, image: 'https://www.designi.com.br/images/preview/11315989.jpg' },
    { id: '4', name: 'Pizza Marguerita',  price: 90, image: 'https://www.designi.com.br/images/preview/11315989.jpg' },
  ];
  
  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Popular</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", { data: item });
            }}
            style={{
              backgroundColor: "#D3D3D3",
              width: 150,
              height: 200,
              marginRight: 20,
              borderRadius: 20,
              paddingHorizontal: 20,

              paddingVertical: 20,
              gap: 10,
            }}
          >
            
            
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
