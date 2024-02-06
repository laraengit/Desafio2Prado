/* import { StatusBar } from 'expo-status-bar'; */
import { useState } from 'react';
import uuid from 'react-native-uuid'
import { Modal,StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

const  App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idBorrar, setIdBorrar] = useState("")
  const [tarea,setTarea] = useState({title:"",
  descripcion:"",
  id: ""})
  const [arrTarea,setArrTarea] = useState([])
  const agregarTarea = () =>{
    setArrTarea([...arrTarea,tarea])
    setTarea({title:" ",
    descripcion:" ",
    id: " "})
    console.log(arrTarea)
  }
  const onHandlerTitle = (text) =>{
    console.log(text)
    const id = uuid.v4()
    setTarea({...tarea,title:text,id:id})
    console.log(tarea)

  }
  const onHandlerDesc = (d) =>{
    console.log(d)
    setTarea({...tarea,descripcion:d})
    console.log(tarea)
  }
  const onHandlerModal = (id) =>{
    setIdBorrar(id)
    setModalVisible(true)
    
  }
  const borrarTarea = () =>{
    setArrTarea(arrTarea.filter(tareita => tareita.id != idBorrar))
  }

  return (
    <View style={styles.container}>
      {/* <Text style = {styles.text} >Hola, Coder! Esta es mi primera entrega. </Text>
        {/* <StatusBar style="auto" /> */} 
      <View style={styles.inputContainer}>
        <TextInput value={tarea.title} placeholder='Ingresar titulo' style={styles.input} onChangeText={onHandlerTitle}/>
        <TextInput value={tarea.descripcion} placeholder='Ingresar descrip' style={styles.input} onChangeText={onHandlerDesc}/>
        <Button title='+' onPress={agregarTarea}/>
      </View>
       
      <View style = {styles.cardContainer}>
        <FlatList
          data={arrTarea}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style = {styles.card}>
              <Text style = {styles.text}>{item.title} </Text>
              <Button title='-' onPress={() => onHandlerModal(item.id)}/>
            </View>
          )}
        />

      </View>
      
      <Modal visible = {modalVisible}>
        <View>
          <Text>
            ¿Seguro que desea borrar?
          </Text>
          <Button title = "Sí, eliminar" onPress={()=>{console.log("Elemento eliminado"),borrarTarea(),setModalVisible(false)}}/>
          <Button title = "No, mantener" onPress={()=>setModalVisible(false)}/>
        </View>
      </Modal>

      

    </View>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:30,
    
    
  },
  
 
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
  cardContainer:{
    alignItems:"center",
    gap:10,
    margin:20,
  
  },
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
});
