import  React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native'

export default function CounterScreen(){
    const [num, setValue]=useState(0);

    const increaseValue = () =>{
        var val= num + 1;
        setValue(val);
    }
    const decreaseValue = () =>{
        var val= num -1;
        setValue(val);
    }
    return(
        <View>
            <Button style={styles.Button} title="Increase" onPress={() => increaseValue()}/>
            <Button title="Decrease" onPress={() => decreaseValue()}/>
            <Text style={{textAlign: 'center', paddingTop: 20}}>Current count:</Text>
            <Text style={{textAlign: 'center', paddingTop: 20}}>{num}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        color: 'black',
        borderColor: 'blue',
        backgroundColor: 'pink'


    }
})