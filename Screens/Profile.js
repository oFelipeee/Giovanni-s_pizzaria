import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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

      <Button title="Cadastrar" onPress={handleSubmit} />

      <View style={styles.loginContainer}>
        <Text>Já tem uma conta?</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
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
});

export default Profile;