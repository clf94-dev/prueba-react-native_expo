
import * as React from 'react';
import { View, Text , FlatList} from 'react-native';
import CardItem from './CardItem';
import { CardsInfo } from './CardsInfo';

export default function ListScreen() {
    const showItem =( {item }) => {
        return( <CardItem title={item.title} text={item.text} index={item.index}/>
    );}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Here you have a list</Text>
        <FlatList horizontal  data={CardsInfo} renderItem={showItem} keyExtractor={item => item.index}/>
       <FlatList horizontal showsHorizontalScrollIndicator='false' data={CardsInfo} renderItem={showItem} keyExtractor={item => item.index}/>
       <FlatList showsVerticalScrollIndicator='false'  data={CardsInfo} renderItem={showItem} keyExtractor={item => item.index}/>
    </View>
  );
}