import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const OrderPlaced = () => {
  const nav = useNavigation();

  useEffect(() => {
    // Define o temporizador para 2 segundos (2000 ms)
    const timer = setTimeout(() => {
      nav.goBack(); // Alternativamente, use nav.navigate("Tabs") se preferir uma navegação específica
    }, 2000);

    // Limpa o timer se o componente for desmontado antes dos 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 20,
        backgroundColor: colorful.primary,
      }}
    >
      <AntDesign name="checkcircle" size={65} color="white" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          lineHeight: 40,
        }}
      >
        Pedido realizado com sucesso
      </Text>
    </View>
  );
};

export default OrderPlaced;
