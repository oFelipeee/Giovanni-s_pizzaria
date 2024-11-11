import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProductFeed = () => {
  // Estado para armazenar o ID do produto selecionado
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Array de produtos com suas imagens
    const products = [
      { id: '1', name: 'Todos', image: 'https://img.favpng.com/8/12/19/fast-food-hamburger-sushi-pizza-png-favpng-WAGdN0PupVh1RTgEutUXjhwrn.jpg' },
      { id: '2', name: 'Pizza', image: 'https://static.vecteezy.com/system/resources/previews/028/882/831/non_2x/pizza-pizza-transparent-pizza-ai-generated-free-png.png' },
      { id: '3', name: 'Burguer', image: 'https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-double-cheese-burger-png-image_11541425.png' },
      { id: '4', name: 'Bebidas', image: 'https://e7.pngegg.com/pngimages/748/506/png-clipart-fizzy-drinks-energy-drink-pepsi-fast-food-drink-food-plastic-bottle-thumbnail.png' },
      // { id: '5', name: 'Produto 5', image: 'https://via.placeholder.com/150' },
    ];

  // Função para lidar com a seleção do produto
  const handleSelectProduct = (id) => {
    setSelectedProductId(id);
  };

  // Renderiza cada produto no FlatList
  const renderProduct = ({ item }) => {
    // Verifica se o produto atual é o selecionado
    const isSelected = item.id === selectedProductId;
    return (
      <TouchableOpacity
        onPress={() => handleSelectProduct(item.id)}
        style={[
          styles.productItem,
          isSelected ? styles.selectedProduct : null, // Aplica o estilo do item selecionado
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  productItem: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#8B7D6B', // Cor padrão do produto
    borderRadius: 20,
    alignItems: 'center',
  },
  selectedProduct: {
    backgroundColor: '#430000', // Cor do produto selecionado
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  productText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProductFeed;
