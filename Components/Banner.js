import { View, Text, Image } from "react-native";
import React from "react";
import { colorful } from "../Utils/Colors";

const Banner = () => {
  return (
    <>
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Promoções:</Text>
      <View
        style={{
          backgroundColor: colorful.secondary,
          height: 150,
          borderRadius: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 12 }}>
          <Text style={{ fontSize: 15, color: "white" }}>Ofertas do dia</Text>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Batata frita grande 
            grátis
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>
            em compras acima de $50
          </Text>
        </View>
        <Image
          style={{ width: 100, height: 100, borderRadius: 300 }}
          source={require("../assets/batatinha.png")}
        />
      </View>
    </View>
   
     <View
       style={{
         backgroundColor: colorful.secondary,
         height: 150,
         borderRadius: 10,
         paddingHorizontal: 20,
         flexDirection: "row",
         paddingVertical: 20,
         justifyContent: "space-between",
       }}
     >


       <View style={{ gap: 12 }}>
         <Text style={{ fontSize: 15, color: "white" }}>Ofertas do dia</Text>
         <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Combo
         </Text>
         <Text style={{ fontSize: 15, color: "white" }}>
           Combo burguer + pizza, por $100
         </Text>
       </View>
       <Image
         style={{ width: 100, height: 100 }}
         source={require("../assets/welcom.png")}
       />
     </View>

   </>
  );
};

export default Banner;
