import React, { useState } from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import ToDoCard from "./components/ToDoCard";
import InputBar from "./components/InputBar";
import SaveBar from './components/SaveBar';


function App() {


    const [list, setList] = useState([]);
    const [todoItem, setToDoItem] = useState();
    const [idNum, setidNum] = useState(0);
    
    const renderToDoS = ({item}) => <ToDoCard id={item.id} text={item.text} onPress = {handlePress} longPress={longHandlePress} isDone = {item.done} />

    const handlePress = (id) => {
        setList(list.map((item) => item.id === id ? {...item, done: !item.done}:{...item}))
    }

    const longHandlePress = (id) => {
        setList(list.filter((item) => item.id !== id))
    }

    const writtentext = (text) =>{  
        setToDoItem(text)
    }

    const handleSave = () => {
        const item = {
            "id":idNum,
            "text":todoItem,
            "done":false,
        }
        setidNum(idNum +1);
        setList([...list,item])
    }
    
    const activeTasks = () => {
        const actives = list.filter((item) => !item.done)
        return actives
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header_container}>


            <Text style={styles.header}>Yapılacaklar</Text>
            <Text style={styles.number}>{activeTasks().length}</Text>
            </View>
            <FlatList 
            data={list}
            renderItem={renderToDoS}/>

            <View style={styles.under_container}>
            <InputBar written = {writtentext}/>
            <SaveBar onPress = {handleSave} />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#121112',
        flex: 1,
    },
    header_container:{
        flexDirection: 'row',
    },
    header:{
        color: 'orange',
        marginTop: 30,
        fontSize: 40,
        margin: 5,
        fontStyle: 'bold',
        fontWeight: 'bold',
        flex: 1,
    },
    number:{
        color: 'orange',
        fontSize: 30,
        marginTop: 40,
        fontStyle: 'bold',
        fontWeight: 'bold',
        margin:10,
    },
    under_container:{
        padding: 10,
        margin:10,
        justifyContent: 'center',
        borderRadius:10,
        marginBottom:30,
        
        
    }

})