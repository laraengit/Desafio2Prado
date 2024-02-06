import { StyleSheet, Text, View, Button, Switch } from 'react-native'
import React from 'react'

const CardTarea = ({item, onHandlerModal, completeTask}) => {
  return (
    <View style = {styles.card}>
        <Text style = {styles.text}>{item.title} </Text>
        <Button title='-' onPress={() => onHandlerModal(item)}/>
        <Switch value = {item.completed} onValueChange={() => completeTask(item.id)}/>
        <Text>{item.completed ? "Riego realizado" : "Falta Riego"}</Text>
    </View>
  )
}

export default CardTarea

const styles = StyleSheet.create({
    card:{
        
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        padding:10,
        
      },
      text:{
    
        color: 'black',
        margin: 20,
        padding:10,
        width:250,
        borderRadius:5,
        
        backgroundColor:"#CEF5DA",
    
      },
})