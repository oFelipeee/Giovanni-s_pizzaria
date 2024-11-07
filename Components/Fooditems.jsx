import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";

import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();
  const foodPizza = [
    {
      id: 1,
      name: "Pizza",
      price: 250,
      image:
        "https://www.marcellinaincucina.com/wp-content/uploads/2021/02/Calabrese-pizza-1-6.jpg",
    },
    {
      id: 3,
      name: "Bebida",
      price: 30,
      image: "https://www.designi.com.br/images/preview/10000392.jpg"
    }
  ];

  const foodPizzaVeg = [
    {
        id: 2,
        name: "Pizza Vegana",
        price: 120,
        image: "https://conteudo.imguol.com.br/c/entretenimento/49/2020/07/09/pizza-vegana-sem-gluten-1594310825995_v2_450x450.jpg",

    }
  ]

  const bebidas = [
    {
      id: 3,
      name: "Bebida",
      price: 30,
      image: ""
    }
  ]
  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Popular</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={foodPizza}
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
              source={require("../assets/pizza_calabresa.png")}
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
