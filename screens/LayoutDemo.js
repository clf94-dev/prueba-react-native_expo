import * as React from 'react';
import {View, FlatList} from 'react-native';
import CardImgText from '../components/CardImgText'
import {CardImageInfo} from './CardImageInfo'


export default function LayoutDemo(){
    const showCard = ({item}) => {
        return(
            <CardImgText title={item.title} src={item.src} text={item.text} />
        )
    }
    return(
        <View>
<FlatList keyExtractor={item => item} data={CardImageInfo} renderItem={showCard}></FlatList>
        </View>
    )
}