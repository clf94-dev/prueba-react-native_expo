import React, {useState} from 'react';
import {View, FlatList, Button, Text} from 'react-native';

export default function ColorsScreen (){
    const [colors, setColors] = useState([]);
    const randomColor = () => {
        var red = Math.round(Math.random() * 256).toString(16);
        var blue = Math.round(Math.random() * 256).toString(16);
        var green = Math.round(Math.random() * 256).toString(16);
        
        var color= '#'+ red + green+blue;
        return (color);
    }

    return(
        <View>
        <Button title="Add Color" onPress={()=> setColors([...colors, randomColor()])} />

        <FlatList keyExtractor={item => item} data={colors} renderItem={({item})=>{
            return(
                <View style={{height: 100, width: 400, backgroundColor: item}}> 
                <Text style={{color: 'white', fontSize: 40}} > {item}</Text></View>
               
            )
        }}/>
        </View>
    )
}