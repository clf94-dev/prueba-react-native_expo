import  React, {useState} from 'react';
import {View, Button, Text} from 'react-native'

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
            <Button title="Increase" onPress={() => increaseValue()}/>
            <Button title="Decrease" onPress={() => decreaseValue()}/>
            <Text style={{textAlign: 'center', paddingTop: 20}}>{num}</Text>
        </View>
    )
}