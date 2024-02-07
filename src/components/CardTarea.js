import { StyleSheet, Text, View, Button, Switch } from 'react-native'
import React from 'react'
import BotonPropio from './BotonPropio'

const CardTarea = ({item, onHandlerModal, completeTask}) => {
  return (
    <View style = {styles.card}>
        <View style = {styles.cabeceraCard}>
            <Text style = {styles.textTitle}>{item.titulo} </Text>
            <Text>{item.completed ? "Riego realizado" : "Falta Riego"}</Text>
            <Switch value = {item.completed} onValueChange={() => completeTask(item.id)}/>
        </View>
        <Text style = {styles.textDescripcion}>{item.descripcion} </Text>
        <View style = {styles.botonera}>
            <BotonPropio
                nombre={"Borrar"}
                colorFondo={"#FACD77"}
                onPress={() => onHandlerModal(item)}
            />
            <BotonPropio
                nombre={"Editar"}
                colorFondo={"#F5A69E"}
                onPress={() => console.log("Editar")}
            />
        </View>
        
        {/* <Button title='-' onPress={() => onHandlerModal(item)}/> */}
        
        
    </View>
  )
}

export default CardTarea

const styles = StyleSheet.create({
    card:{
        
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        padding:10,
        borderRadius:5,
        backgroundColor:"#CEF5DA",
        gap:20
        
      },
      cabeceraCard:{
        flexDirection: "row",
        alignItems:"center",


      },
      botonera:{
        flexDirection:"row",
        gap:25,

      },
      textTitle:{
    
        color: 'black',
        fontSize:18,
        margin: 20,
        padding:10,
        

      },
      textDescripcion:{
        borderRadius:5,
        padding:10,
        backgroundColor:"white",
      }
})