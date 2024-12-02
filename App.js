import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas que você deseja utilizar
import Profile from './Screens/Profile';  // Tela de cadastro
import Login from './Screens/Login';      // Tela de login
import Welcome from './Screens/Welcome';
import Tabs from './Screens/Tabs';
import Details from './Screens/Details';
import Cart from './Screens/Cart';
import { Context } from './Components/Context';  // Contexto para gerenciar estado global
import OrderPlaced from './Screens/OrderPlaced';

// Criando o stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          {/* Tela inicial de boas-vindas */}

          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />

          {/* Tela de perfil (ou cadastro) */}
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />

          

          {/* Tela de login */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          {/* Tela de tabs principais */}
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />

          {/* Tela de detalhes do produto ou serviço */}
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ headerShown: false }}
          />

          {/* Tela de carrinho */}
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />

          {/* Tela de confirmação de pedido */}
          <Stack.Screen
            name="Order"
            component={OrderPlaced}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};

export default App;