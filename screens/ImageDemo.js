import * as React from 'react';
import {View} from 'react-native';
import CardImage from '../components/CardImage'
import { CardImageInfo } from "./CardImageInfo";

export default function ImageDemo({navigation}){
    return(
        <View>

         
                
                    <CardImage title="Beach" src={require('../assets/images/beach.jpg')} />
        
                    <CardImage title="Mountain" src={require('../assets/images/mountain.jpg')} />
        
                    <CardImage title="Forest" src={require('../assets/images/forest.jpg')} />
        
              
        
        </View>
    )
}