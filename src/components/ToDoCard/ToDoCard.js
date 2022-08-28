import React from 'react';
import { View, TextInput, Text } from "react-native";
import styles from './ToDoCard.styles';

const ToDoCard = ({id,text,isDone,onPress, longPress}) => {

    
    return(
        isDone ? <View style={styles.marked_container}> 
            <Text onPress={() => onPress(id)} onLongPress={() => longPress(id)} style={styles.striked}>{text}</Text> 
        </View> : <View style={styles.container}> 
            <Text onPress={() => onPress(id)} onLongPress={() => longPress(id)} style={styles.text}>{text}</Text> 
        </View>
    );
};

export default ToDoCard;