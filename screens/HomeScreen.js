
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Go To Text' color='blue' onPress={() => navigation.navigate('Text')}/>
      <Button title='Go To List'  onPress={() => navigation.navigate('List')}/>
      <Button title='Go To Buttons' onPress={() => navigation.navigate('ColorButton')}/>
      <Button title='Go To Switch' onPress={() => navigation.navigate('SwitchDemo')}/>
      <Button title='Go To TextInput' onPress={() => navigation.navigate('TextInputDemo')}/>
      <Button title='Go To Images' onPress={() => navigation.navigate('ImageDemo')}/>
      <Button title='Go To Counter' onPress={() => navigation.navigate('CounterScreen')}/>
    <Button title='Go To Colors Demo' onPress={() => navigation.navigate('ColorsScreen')}/>
    <Button title='Go To Style Button' onPress={() => navigation.navigate('ButtonsScreenStyle')}/>
    </View>
  );
}


