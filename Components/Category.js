import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductFeed = ({ onSelectCategory, selectedCategory }) => {
  const products = [
    { id: 'all', name: 'Todos', image: 'https://img.favpng.com/8/12/19/fast-food-hamburger-sushi-pizza-png-favpng-WAGdN0PupVh1RTgEutUXjhwrn.jpg' },
    { id: 'pizza', name: 'Pizza', image: 'https://static.vecteezy.com/system/resources/previews/028/882/831/non_2x/pizza-pizza-transparent-pizza-ai-generated-free-png.png' },
    { id: 'burger', name: 'Burguer', image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
    { id: 'drinks', name: 'Bebidas', image: 'https://e7.pngegg.com/pngimages/748/506/png-clipart-fizzy-drinks-energy-drink-pepsi-fast-food-drink-food-plastic-bottle-thumbnail.png' },
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

  const pizzas = [
    { id: '1', name: 'Pizza Margherita', image: 'https://img.freepik.com/premium-psd/margherita-pizza-png-with-transparent-background_484256-2860.jpg' },
    { id: '2', name: 'Pizza Pepperoni', image: 'https://static.vecteezy.com/system/resources/previews/028/882/831/non_2x/pizza-pizza-transparent-pizza-ai-generated-free-png.png' },
    { id: '2', name: 'Pizza Calabresa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnC0DAZvwlj-YnWhvEC6My-KmbFV7GGdgsDQ&s' },
    { id: '2', name: 'Pizza Pizza Doce', image: 'https://static.vecteezy.com/system/resources/previews/028/882/831/non_2x/pizza-pizza-transparent-pizza-ai-generated-free-png.png' },
  ];

  const hamburgers = [
    { id: '3', name: 'Cheeseburger', image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
    { id: '4', name: 'Double Bacon', image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
    { id: '4', name: 'Double Bacon', image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
    { id: '4', name: 'Double Bacon', image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
  ];

  const drinks = [
    { id: '5', name: 'Coca-Cola', image: 'https://e7.pngegg.com/pngimages/748/506/png-clipart-fizzy-drinks-energy-drink-pepsi-fast-food-drink-food-plastic-bottle-thumbnail.png' },
    { id: '6', name: 'Suco de Laranja', image: 'https://e7.pngegg.com/pngimages/748/506/png-clipart-fizzy-drinks-energy-drink-pepsi-fast-food-drink-food-plastic-bottle-thumbnail.png' },
    { id: '6', name: 'Suco de Laranja', image: 'https://e7.pngegg.com/pngimages/748/506/png-clipart-fizzy-drinks-energy-drink-pepsi-fast-food-drink-food-plastic-bottle-thumbnail.png' },
    { id: '6', name: 'Suco de Laranja', image: 'https://e7.pngegg.com/pngimages/748/506/png-clipart-fizzy-drinks-energy-drink-pepsi-fast-food-drink-food-plastic-bottle-thumbnail.png' },
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
          <TouchableOpacity style={styles.card}>
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
    backgroundColor: '#430000',  // Cor de destaque quando o item estiver selecionado
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
    borderRadius: 40,
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
