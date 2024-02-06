import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const AgregarTarea = ({tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,agregarTarea }) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput value={tareaTitle} placeholder='Ingresar titulo' style={styles.input} onChangeText={onHandlerTitle}/>
        <TextInput value={tareaDesc} placeholder='Ingresar descrip' style={styles.input} onChangeText={onHandlerDesc}/>
        <Button title='+' onPress={agregarTarea}/>
      </View>
  )
}

export default AgregarTarea

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor: '#CEF5DA',
        borderRadius:5,
        padding:10
      },
      input:{
        width:150,
        borderWidth: 2,
        margin: 4,
        padding:10,
        backgroundColor: 'white',
        borderRadius:5,
        color:"black",
      },
})