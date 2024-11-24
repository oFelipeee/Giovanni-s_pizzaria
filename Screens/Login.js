import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor, preencha todos os campos!');
      return;
    }

    try {
      // Faz uma requisição para buscar usuários com o email e senha correspondentes
      const response = await axios.get('http:10.0.2.2:3000/users',{
        params: {
          email,
          password,
        },
      });

      if (response.data.length > 0) {
        // Usuário encontrado
        const user = response.data[0]; // Pega o primeiro usuário encontrado
        Alert.alert('Login realizado com sucesso!');
        // Passa os dados do usuário para a tela Home
        navigation.navigate('Home', { user }); // Corrigido para passar o nome da tela 'Home'
      } else {
        // Usuário não encontrado
        setError('Email ou senha inválidos!');
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao verificar as credenciais. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

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

      <Button title="Entrar" onPress={handleLogin} />
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
});

export default Login;