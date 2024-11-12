import { View, 
  Text, 
  TextInput, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const pizzas = [
  { id: '1', name: 'Pizza Margherita', image: 'https://www.donguilherme.com.br/assets/userfiles/archives/6405dff0d4d8d.jpg' },
  { id: '2', name: 'Pizza Pepperoni', image: 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg' },
  { id: '3', name: 'Pizza Frango com Catupiry', image: 'https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg'},
  { id: '3', name: 'Pizza Vegetariana', image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-vegetariana-00.jpeg'},
  { id: '3', name: 'Pizza Havaiana ', image: 'https://minhasreceitinhas.com.br/wp-content/uploads/2017/06/1296_Pizza_havaiana-1200x800.jpeg'},
];

const hamburgers = [
  { id: '1', name: 'Hambúrguer Clássico', image: 'https://guiadacozinha.com.br/wp-content/uploads/2024/05/x-burguer-tradicional-768x619.jpg' },
  { id: '2', name: 'Cheeseburger', image: 'https://i.ytimg.com/vi/SvOx7tA_Cv8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUi4DTtB9e2mnIAe3JoxUoj6nbNA' },
  { id: '3', name: 'Double Bacon', image: 'https://groundbeefrecipes.com/wp-content/uploads/double-bacon-cheeseburger-recipe-6.jpg' },
  { id: '3', name: 'Chicken Burguer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV8_Q9_dhNnojwi4KjDfPCyRs3ceY0QqGD4g&s' },
  { id: '3', name: 'BBQ Burguer', image: 'https://realfoodbydad.com/wp-content/uploads/2019/07/Southern-BBQ-Burger-Real-Food-by-Dad-683x1024.jpg' },
  { id: '3', name: 'Hamburguer Vegano', image: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/lojamrve/catalog/artes-dos-combos-com-precos-reajustados-201-6.png' },
];

const Bebidas = [
  { id: '1', name: 'Pepsi', image: 'https://mercantilatacado.vtexassets.com/arquivos/ids/168863-800-auto?v=638342834423330000&width=800&height=auto&aspect=true' },
  { id: '2', name: 'Coca Cola', image: 'https://andinacocacola.vtexassets.com/arquivos/ids/158244/Coca-Cola-Original-350ml-Lata---110130_COCA_PAI.png?v=638628901095270000' },
  { id: '3', name: 'Guaraná', image: 'https://cdn.awsli.com.br/2500x2500/1330/1330028/produto/51587137/a19f18b3f5.jpg' },
  { id: '3', name: 'Coca Cola Zero', image: 'https://andinacocacola.vtexassets.com/arquivos/ids/158245/Coca-Cola-Sem-Acucar-350ml-Lata_113130_COCA_PAI.png?v=638628902753430000' },
  { id: '3', name: 'Suco de Laranja', image: 'https://www.natone.com.br/wp-content/uploads/2024/09/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.webp' },
];

const Batatas = [
  { id: '1', name: 'Batata Normal', image: 'https://www.sabornamesa.com.br/media/k2/items/cache/377829b055e89e3afb894e7528a10996_XL.jpg' },
  { id: '2', name: 'Batata com cheddar', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDGaOTinfe5U2uOoTAeVqC0lko8J2CBxfuw&s' },
];
    


const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather name="search" size={24} color="black" />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      <Text style={styles.sectionTitle}>Pizzas</Text>
      <FlatList
        data={pizzas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Hambúrgueres</Text>
      <FlatList
        data={hamburgers}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.horizontalList}
      />

<Text style={styles.sectionTitle}>Bebidas</Text>
      <FlatList
        data={Bebidas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.horizontalList}
      />

<Text style={styles.sectionTitle}>Batatas</Text>
      <FlatList
        data={Batatas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );
};

const ProductCard = ({ product }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.cardText}>{product.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 26
  },
  searchBar: {
    backgroundColor: "#E3E3E3",
    height: 60,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  horizontalList: {
    paddingBottom: 20,
  },
  card: {
    width: 170,
    // height: 70,
    borderRadius: 20,
    backgroundColor: '#cf7c0a',
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 69,
    height: 70,
    borderRadius: 300,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Search;
