import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import useFetch from '../Hooks/useFetch';

const Details = props => {
  const id = props.route.params.pokemon;
  const { data = {}, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  console.log(data);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${data?.name
            }.png`,
        }}
      />
      <Text style={styles.text}>Name: {data?.name}</Text>
      <Text style={styles.text}>Height: {data?.height}</Text>
      <Text style={styles.text}>Weight: {data?.weight}</Text>
      <Text style={styles.text}>Ability: {data?.abilities[0].ability.name}</Text>
      <Text style={styles.text}>Type: {data?.types[0].type.name}</Text>
    </View>
  ) 
  );
};

export default Details;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});