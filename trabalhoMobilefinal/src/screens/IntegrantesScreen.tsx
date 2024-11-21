import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CardIntegrantes from '../components/Cards/CardIntegrantes'
import { dados } from '../components/dadoIntegrantes'; 
export default function IntegrantesScreen() {
    
    return (
    <View style={style.container}>
      <View >
      <FlatList
        data={dados}
        renderItem={({ item}) => (
          <CardIntegrantes lista={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});