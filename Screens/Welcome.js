import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";
import { colorful } from "../Utils/Colors";

const Welcome = () => {
  const nav = useNavigation();
  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
      colors={[colorful.primary, colorful.secondary]}
    >
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: "white",
          borderRadius: 300,
          justifyContent: "center",
          alignItems: "center",
          top: 50,
        }}
      >
        <Image
          style={{ width: 270, height: 270, borderRadius: 300 }}
          source={require("../assets/logo_2.png")}
        />
      </View>

      <Text
        style={{
          fontSize: 40,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 55,
          letterSpacing: 2.5,
          top: -15,
        }}
      >
        Seja{"\n"}Bem - vindo(a)
      </Text>

      

      <TouchableOpacity
        onPress={() => {
          nav.navigate("Tabs");
        }}
        style={{
          backgroundColor: "white",
          width: 200,
          height: 55,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: colorful.primary,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          Iniciar
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome;
