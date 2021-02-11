import * as React from 'react';
import {View, Button, TouchableOpacity, Text,StyleSheet} from 'react-native'

export default function ButtonsScreenStyle({navigation}) {

    return(
        <View>
            <Text style={styles.Text}>Button element: </Text>
            <Button title="Button" />
            <Text style={styles.Text}>TouchableOpacity element</Text>
            <TouchableOpacity style={styles.buttonborder}>
                <Text style={styles.text1}>TouchableOpacity Style 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBlack }>
                <Text style={styles.text2}>TouchableOpacity Style 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBorder }>
                <Text style={styles.text3}>Touchable Opacity Style 3</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonborder: {
        margin:20, 
        
        padding: 30,
        
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'lightblue'
    },
    Text:{
        textAlign: 'center',
        fontSize: 25
    },
    buttonBlack: {
        margin:20, 
        padding: 30,
        
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'black'
        
    },
    text2:{
        color:'white',
        fontSize:20,
        fontWeight: "bold"
    },
    text1:{
        color:'black',
        fontSize:20,
    },
    text3: {
        color:'blue',
        fontSize:20,
        fontWeight: "bold"
    }, buttonBorder:{
        width:'50%',
        margin:20, 
        padding: 20,
        
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        
    }

})
