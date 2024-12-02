import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { colorful } from "../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { item } from "../Components/Context";
import axios from "axios";

const Cart = () => {
  const nav = useNavigation();
  const { myBag, setmyBag } = React.useContext(item);

  // Calcula o total de acordo com as quantidades e preços de cada item
  const totalAmount = myBag.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );

  // Atualiza a quantidade de um item no carrinho
  const updateQuantity = (product, newQuantity) => {
    const updatedBag = myBag.map((item) =>
      item.name === product.name ? { ...item, quantity: newQuantity } : item
    );
    setmyBag(updatedBag);
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: 50,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "500" }}>
        {myBag.length} Itens no carrinho
      </Text>
      <View style={{ height: 300 }}>
        <FlatList
          data={myBag}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: 130,
                  borderRadius: 20,
                  marginBottom: 10,
                  flexDirection: "row",
                  gap: 5,
                  paddingHorizontal: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F0EDF8",
                    width: "35%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ width: 90, height: 90 }}
                    source={{ uri: item.image }}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    justifyContent: "space-between",
                    borderRadius: 20,
                  }}
                >
                  <View style={{ gap: 5 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        {item.name}
                      </Text>
                      <AntDesign
                        onPress={() => {
                          setmyBag(myBag.filter((val) => val.name !== item.name));
                        }}
                        name="closecircleo"
                        size={24}
                        color="black"
                      />
                    </View>

                    <Text
                      style={{
                        color: "#98942C",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      {item.price} RS
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      onPress={() => {
                        const newQuantity = (item.quantity || 1) + 1;
                        updateQuantity(item, newQuantity);
                      }}
                      name="pluscircle"
                      size={20}
                      color={colorful.primary}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "black",
                      }}
                    >
                      {item.quantity || 1}
                    </Text>
                    <AntDesign
                      onPress={() => {
                        const newQuantity =
                          item.quantity && item.quantity > 1 ? item.quantity - 1 : 1;
                        updateQuantity(item, newQuantity);
                      }}
                      name="minuscircle"
                      size={20}
                      color={colorful.primary}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <Text style={{ fontSize: 22, fontWeight: "500" }}>Ordens</Text>

      <View
        style={{
          height: 90,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "black",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <TextInput style={{ height: 55, fontSize: 17 }} placeholder="Observações" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "500" }}>Total:</Text>
        <Text
          style={{
            color: "#98942C",
            fontSize: 17,
            fontWeight: "800",
          }}
        >
          {totalAmount} RS
        </Text>
      </View>

      <TouchableOpacity
        onPress={async () => {
          if (myBag.length > 0) {
            try {
              // Enviando os dados do pedido ao servidor
              const response = await axios.post("http://10.0.2.2:3000/users", {
                items: myBag,
                total: totalAmount,
                date: new Date().toISOString(), // Adiciona uma data de pedido
              });

              if (response.status === 201) {
                Alert.alert("Pedido Confirmado", "Seu pedido foi enviado com sucesso!");
                setmyBag([]); // Limpa o carrinho
                nav.replace("Order"); // Navega para a tela de pedidos
              }
            } catch (error) {
              console.error("Erro ao enviar o pedido:", error);
              Alert.alert(
                "Erro",
                "Não foi possível enviar seu pedido. Tente novamente."
              );
            }
          }
        }}
        disabled={myBag.length === 0}
        style={{
          backgroundColor: myBag.length > 0 ? colorful.primary : "gray",
          height: 60,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
          Confirmar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Cart;
