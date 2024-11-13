import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const ProductFeed = ({ onSelectCategory, selectedCategory }) => {
  const products = [
    { id: 'all', name: 'Todos', image: 'https://img.favpng.com/8/12/19/fast-food-hamburger-sushi-pizza-png-favpng-WAGdN0PupVh1RTgEutUXjhwrn.jpg' },
    { id: 'pizza', name: 'Pizza', image: 'https://t3.ftcdn.net/jpg/06/27/23/56/360_F_627235669_iz0O2leKYRzjxAKdFP7odpp9eCOZREtN.jpg' },
    { id: 'burger', name: 'Burguer', image: 'https://png.pngtree.com/png-vector/20240123/ourlarge/pngtree-burger-object-png-png-image_11466023.png' },
    { id: 'drinks', name: 'Bebidas', image: 'https://w7.pngwing.com/pngs/582/419/png-transparent-coca-cola-soft-drink-juice-coca-cola-drink-soda-drinking-glass-food-cola-beer-thumbnail.png' },
  ];

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelectCategory(item.id)}
          style={[styles.productItem, item.id === selectedCategory && styles.selectedProductItem]}
        >
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigation = useNavigation(); // Adiciona a navegação aqui

  const pizzas = [
    { id: '1', name: 'Pizza Margherita', price: 45, image: 'https://www.donguilherme.com.br/assets/userfiles/archives/6405dff0d4d8d.jpg' },
    { id: '2', name: 'Pizza Pepperoni', price: 50, image: 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg' },
    { id: '3', name: 'Pizza Calabresa', price: 68, image: 'https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1212512019.jpg' },
    { id: '4', name: 'Pizza Doce', price: 40 , image: 'https://maisminas.org/wp-content/uploads/2022/12/pizza-scaled.jpg' },
  ];

  const hamburgers = [
    { id: '5', name: 'Cheeseburger',  price: 40, image: 'https://i.ytimg.com/vi/SvOx7tA_Cv8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUi4DTtB9e2mnIAe3JoxUoj6nbNA' },
    { id: '6', name: 'Double Bacon', price: 43, image: 'https://groundbeefrecipes.com/wp-content/uploads/double-bacon-cheeseburger-recipe-6.jpg' },
    { id: '7', name: 'X-Burguer', price: 20, image: 'https://guiadacozinha.com.br/wp-content/uploads/2024/05/x-burguer-tradicional-768x619.jpg' },
    { id: '8', name: 'X-Salada', price: 30, image: 'https://assets.unileversolutions.com/recipes-v2/106684.jpg' },
  ];

  const drinks = [
    { id: '9', name: 'Coca-Cola', price: 6, image: 'https://andinacocacola.vtexassets.com/arquivos/ids/158244/Coca-Cola-Original-350ml-Lata---110130_COCA_PAI.png?v=638628901095270000' },
    { id: '10', name: 'Pepsi', price: 6, image: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168863-800-auto?v=638342834423330000&width=800&height=auto&aspect=true' },
    { id: '11', name: 'Guaraná', price: 6, image: 'https://cdn.awsli.com.br/2500x2500/1330/1330028/produto/51587137/a19f18b3f5.jpg' },
    { id: '12', name: 'Suco de laranja', price: 6, image: 'https://www.natone.com.br/wp-content/uploads/2024/09/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.webp' },
  ];

  const filteredItems = () => {
    switch (selectedCategory) {
      case 'pizza':
        return pizzas;
      case 'burger':
        return hamburgers;
      case 'drinks':
        return drinks;
      default:
        return [...pizzas, ...hamburgers, ...drinks];
    }
  };

  return (
    <View style={styles.container}>
      <ProductFeed onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <FlatList
        data={filteredItems()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Details", { data: item })} // Navegação ao clicar
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.gridList, { marginTop: 30 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 26,
  },
  productItem: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#8B7D6B',
    borderRadius: 20,
    alignItems: 'center',
  },
  selectedProductItem: {
    backgroundColor: '#430000', // Cor de destaque quando o item estiver selecionado
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  productText: {
    fontSize: 16,
    color: '#fff',
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#cf7c0a',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 22,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  gridList: {
    paddingBottom: 20,
  },
});

export default Menu;
