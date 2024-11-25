import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
 
const Profile = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
 
  useEffect(() => {
    // Substitua pelo ID do usuário logado
    const userId = "4bdc";
 
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:3000/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };
 
    fetchUser();
  }, []);
 
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Carregando informações...</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.info}>Nome: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
 
      {/* Botão para sair */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          navigation.navigate("Welcome"); // Navega para a página de boas-vindas
        }}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
 
export default Profile;