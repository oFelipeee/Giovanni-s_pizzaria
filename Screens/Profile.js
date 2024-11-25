import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/users', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        // Cadastro bem-sucedido
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error); // Log para depuração
      setError('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botão Cadastrar estilizado */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 12, // Borda arredondada para os inputs
    fontSize: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red', // Cor vermelha para o botão
    paddingVertical: 12,
    borderRadius: 12, // Borda arredondada para o botão
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: 'blue', // Cor azul para o texto de login
    fontSize: 16,
  }
});

export default Profile;
