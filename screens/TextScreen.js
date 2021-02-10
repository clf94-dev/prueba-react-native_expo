import * as React from 'react';
import { View, Text } from 'react-native';

export default function TextScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here is some text for ya</Text>
    </View>
  );
}