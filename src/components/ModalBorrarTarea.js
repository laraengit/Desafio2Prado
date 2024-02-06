import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalBorrarTarea = ({tareaSelect,borrarTarea,onHandlerModal,modalVisible}) => {


    return (
        <Modal 
            visible = {modalVisible}
            animationType='fade'
            onRequestClose={()=>onHandlerModal({})}
        >
            <View>
            <Text>
                ¿Seguro que desea borrar el elemento {tareaSelect.titulo}?
            </Text>
            <Button title = "Sí, eliminar" onPress={borrarTarea}/>
            <Button title = "No, mantener" onPress={()=>onHandlerModal({})}/>
            </View>
        </Modal>
  )
}

export default ModalBorrarTarea

const styles = StyleSheet.create({})