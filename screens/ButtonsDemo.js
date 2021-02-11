import React , {useState }from 'react'
import { View, Text, Button } from 'react-native';


export default function ButtonsDemo ({navigation}) {
const [randomColor, setColor] = useState('#ffffff');
const [randomColor2, setColor2] = useState('#000000');


const generateRandom = () =>{
var red = Math.round(Math.random() * 256).toString(16);
var blue = Math.round(Math.random() * 256).toString(16);
var green = Math.round(Math.random() * 256).toString(16);

var color= '#'+ red + green+blue;
var red = Math.round(Math.random() * 256).toString(16);
var blue = Math.round(Math.random() * 256).toString(16);
var green = Math.round(Math.random() * 256).toString(16);

var color2= '#'+ red + green+blue;
setColor2(color2);
return (setColor(color));

}

    return (
      <View>
        <Button title='Random Colour' onPress={()=> generateRandom()} />
        <View style={{height: 300, width: 400, backgroundColor:`${randomColor}`}}> 
       <Text style={{color: 'white', fontSize: 40}} > {randomColor}</Text></View>
      
       <View style={{height: 300, width: 400, backgroundColor:`${randomColor2}`}}> 
       <Text style={{color: 'white', fontSize: 40}} > {randomColor2}</Text></View>
     
      </View>
    );
}



