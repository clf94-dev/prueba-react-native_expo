import * as React from 'react';
import { View, Text , FlatList} from 'react-native';

function CardItem(props) {
    return (
     <View style={{margin: 20, alignItems: 'flex-start'}}>
          <Text style={{padding: 2, fontSize: 40}}>{props.title}</Text>
          <Text style={{padding: 1, fontSize: 20}}>{props.text}</Text>
          <Text style={{padding: 1, fontSize: 15}}>{props.index}</Text>
    </View>
    )
}

export default CardItem
