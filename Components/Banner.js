import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colorful } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Banner = () => {
  const navigation = useNavigation();

  const promoData = [
    {
      name: "Batata Lovers",
      price: "20",
      image: require("../assets/batatinha.png"),
      description: "Porção de batatas com 2 molhos",
      addons: [
        require("../assets/abrbe.png"),
        require("../assets/cheddar.png"),
      ],
    },
    {
      name: "Combo Família:",
      price: "100",
      image: require("../assets/combo2.png"),
      description: "2 pizzas + refrigerante por R$ 100",
      addons: [
        require("../assets/coca.png"),

      ],
    },
    {
      name: "Dia do Hambúrguer",
      price: "15",
      image: require("../assets/burguer.png"),
      description: "20% de desconto",
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
              height: 160,
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
