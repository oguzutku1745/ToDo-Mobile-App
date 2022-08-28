import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from './SaveBar.styles';

const SaveBar = ({onPress}) => {

    return(
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}



export default SaveBar;