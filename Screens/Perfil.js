import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
import axios from "axios";
import { colorful } from "../Utils/Colors"; // Certifique-se de que o arquivo Colors.js esteja correto

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://10.0.2.2:3000/users", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        navigation.navigate("Login"); // Redireciona para a tela de login
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[colorful.primary, colorful.secondary]}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ccc"
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.linkText}>Já possui uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5, // Sombra para Android
  },
  title: {
    fontSize: 28,
    color: colorful.primary,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: colorful.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 10,
  },
  linkText: {
    color: colorful.primary,
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default Register;
=======

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        // Substitua pelo ID do usuário logado
        const userId = "daa0";

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
>>>>>>> b8ab594984b96dacd181375724ca6cf96c1fcb4f
