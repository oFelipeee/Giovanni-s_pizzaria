import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
 
const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 35 }}>Menu</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={require("../assets/profile.png")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
};
 
export default Header;