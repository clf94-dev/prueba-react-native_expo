import *as React from 'react';
import {View, Text, Image} from 'react-native';
export default function CardImage(props){
    return(
        <View>
            <Image style={{width: '100%'}} source={props.src}/>
            <Text style={{fontSize: 24, textAlign: 'center'}}>{props.title}</Text>
        </View>
    )
}