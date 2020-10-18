import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    centerText: {
        alignItems: 'center',
        fontSize: 30,
        top: 250
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    name: {
        fontWeight: "bold",
        fontSize: 20
    },
    centerText2: {
        alignItems: 'center',
        fontSize: 30
    }

})

function changeButtonName(index){
    const buttonNames = ["Pokaż","Ukryj"];
    if(index%2 == 0){
        return buttonNames[0];
    }else{
        return buttonNames[1];
    }
}

function changeText(index){
    const text = ["",""];
    if(index%2 == 0){
        text[0] = "";
        text[1] = "";
    }else{
        text[0] = "Nazywam się";
        text[1] = "Paweł Pudło";
    }

    return text
}

const Greeting = () => {



    const [count, setButtonName] = useState(0);
    const onPress = () => setButtonName(prevCount => prevCount + 1);
    const buttonName = changeButtonName(count);
    let table = ["",""];
    table = changeText(count)


    return (
        <View style={styles.centerText}>
            <Text>Zadanie 2</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>{buttonName}</Text>
            </TouchableOpacity>

            <View style={styles.centerText2} >
                <Text>{table[0]}</Text>
                <Text style={styles.name}>{table[1]}</Text>
            </View>
        </View>


    );
};

export default Greeting;


