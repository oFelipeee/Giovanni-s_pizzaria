import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colorful } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Banner = () => {
  const navigation = useNavigation();

  const promoData = [
    {
      name: "Batata frita grande grátis",
      image: require("../assets/batatinha.png"),
      description: "Em compras acima de $50",
      addons: [
        require("../assets/coca.png"),
      ],
    },
    {
      name: "Combo Burguer + Pizza",
      price: "100",
      image: require("../assets/combo2.png"),
      description: "Combo burguer + pizza, por $100",
      addons: [
        require("../assets/coca.png"),
        
      ],
    },
  ];

  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Promoções:</Text>

      {promoData.map((promo, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate("Details", { data: promo })}
        >
          <View
            style={{
              backgroundColor: colorful.teste,
              height: 150,
              borderRadius: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              paddingVertical: 20,
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <View style={{ gap: 12 }}>
              <Text style={{ fontSize: 15, color: "white" }}>Ofertas do dia</Text>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
                {promo.name}
              </Text>
              <Text style={{ fontSize: 15, color: "white" }}>{promo.description}</Text>
            </View>
            <Image
              style={{ width: 100, height: 100, borderRadius: 300, marginLeft: 10 }}
              source={promo.image}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Banner;
