import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import useFetch from '../Hooks/useFetch';
import { LinearGradient } from 'expo-linear-gradient';



export default function PokeCard({ name, url, navigation }) {

  const colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5'
  };

  const main_types = Object.keys(colors);
  const { data = {}, loading, error } = useFetch(url)
  const Name = name[0].toUpperCase() + name.slice(1);
  const id = data?.id
  const showId = data?.id?.toString().padStart(3, '0')
  const poke_types = data?.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types?.indexOf(type) > -1)
  const pokeColor = main_types.filter(type => poke_types?.indexOf(type) > -1)
  const pokemonColor = pokeColor.length > 0 ? pokeColor?.map(type => colors[type]) : ['#c0392b', '#f1c40f', '#8e44ad']
  const color = colors[type];

  return (

    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.card}
      onPress={() =>
        navigation.navigate('Details', {
          pokemon: id,
        })
      }>


      {pokemonColor.length > 1 && <LinearGradient
        colors={pokemonColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.colorCard}
      >
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name
              }.png`,
          }}
        />
        <Text>{Name}</Text>
        <Text>#{showId}</Text>
      </LinearGradient>
      }

      {pokemonColor.length == 1 && <View style={{ ...styles.colorCard, backgroundColor: color }}>
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name
              }.png`,
          }}
        />
        <Text>{Name}</Text>
        <Text>#{showId}</Text>
      </View>
      }

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 10,
    flex: 1,
    padding: 10,
    // width: '45%',
    // height: '45%',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: "center"
  },

  card: {
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 20,
  },
  colorCard: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
})
