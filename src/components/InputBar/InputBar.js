import React from 'react';
import { TextInput, View } from "react-native";
import styles from './InputBar.styles';

const InputBar = (props) => {

    return(
        <View style={styles.container}>
            <TextInput style={styles.inputbar} placeholder=" Yapılacak.." onChangeText={props.written}/>

        </View>

    )
}


export default InputBar;