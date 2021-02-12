import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function CardImgText(props){
    return(
        <View style={styles.view}>
            <Image style={{width: '30%'}} source={ props.src}/>
            <View style={{flex: 1, flexDirection: 'column', padding: 15}}>
                <Text style={styles.title}>{props.title}</Text>
                <Text>{props.text}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
         flexDirection: 'row',
         borderWidth: 1,
         borderRadius: 10,
         overflow: 'hidden',
          margin: 15
    },
    title:{
        fontSize:20,
        fontWeight: "bold"
    }
})