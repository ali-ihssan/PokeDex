import React, { useState, useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import PokeCard from './PokeCard';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';



const Pokemons = ({ navigation, ...props }) => {
  const [searchfeild, setSearchfeild] = useState('');
  const { data = {}, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  const pokemons = data?.results || []

  return (
    <View>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {pokemons
            .filter(pokemon =>
              pokemon?.name?.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((pokemon) => <PokeCard key={pokemon?.name} name={pokemon.name} url={pokemon.url} navigation={navigation} />)}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: "gray",
    justifyContent: 'center',
    marginTop: 40,
  },

  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    // left: '20%',
    zIndex: 1,
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: "lightgray",
    borderColor: '#000',
    textAlign: 'center',
    width: 400,
  },
});
