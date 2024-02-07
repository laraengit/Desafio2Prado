import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CardTarea from './CardTarea'

const ListaTareas = ({arrTarea,onHandlerModal,screenWidth, completeTask}) => {
  return (
    <View style = {[styles.cardContainer,{width:screenWidth -40}]}>
        <FlatList
          data={arrTarea}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardTarea
              item = {item}
              onHandlerModal = {onHandlerModal}
              completeTask ={completeTask}
            />
          )}
        />

      </View>
  )
}

export default ListaTareas

const styles = StyleSheet.create({
    cardContainer:{
        alignItems:"center",
        gap:10,
        margin:20,
      
      },
      
})