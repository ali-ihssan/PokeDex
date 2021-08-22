import React from 'react'
import { View, Text,StyleSheet, FlatList } from 'react-native'

import PokeCard from '../components/PokeCard';

const poke=[
    {
        id:1,
        title:"Pokemon1",
        image:require('../assets/icon.png')

    },
    {
        id:2,
        title:"Pokemon2",
        image:require('../assets/icon.png')

    },
    {
        id:3,
        title:"Pokemon3",
        image:require('../assets/icon.png')

    },
    {
        id:4,
        title:"Pokemon4",
        image:require('../assets/icon.png')

    },
    {
        id:5,
        title:"Pokemon6",
        image:require('../assets/icon.png')

    },
]

export default function Pokedex() {
    return (
        <View style={styles.container}>
     <FlatList style={styles.temp}
         data={poke}
         keyExtractor={poke=>poke.id.toString()}
         renderItem={({item})=><PokeCard title={item.title} />}
     />
     </View>
    )
}

const styles = StyleSheet.create({
    temp:{
        marginTop:10,
        backgroundColor:"pink",
        flexDirection:"column",
        
    },
    container:{
        flex:1,
        backgroundColor: 'gray',
        flexDirection:"row",
        flexWrap:'wrap',
        width:'100%',
        justifyContent:"center",
        alignItems:"center"
    }
})