// In App.js in a new project

import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TextScreen from './screens/TextScreen';
import ListScreen from './screens/ListScreen';
import ButtonsDemo from './screens/ButtonsDemo';
import SwitchScreen from './screens/SwitchScreen';
import TextInputScreen from './screens/TextInputScreen';
import ImageDemo from './screens/ImageDemo'
import CounterScreen from './screens/CounterScreen'
import ColorsScreen from './screens/ColorsScreen'
import ButtonsScreenStyle from './screens/ButtonsScreenStyle'


const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ColorButton" component={ButtonsDemo} />
        <Stack.Screen name="SwitchDemo" component={SwitchScreen} />
        <Stack.Screen name="TextInputDemo" component={TextInputScreen} />
        <Stack.Screen name="ImageDemo" component={ImageDemo}/>
        <Stack.Screen name="CounterScreen" component={CounterScreen}/>
        <Stack.Screen name="ColorsScreen" component={ColorsScreen}/>
        <Stack.Screen name="ButtonsScreenStyle" component={ButtonsScreenStyle}/>
      
      </Stack.Navigator>                     
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

