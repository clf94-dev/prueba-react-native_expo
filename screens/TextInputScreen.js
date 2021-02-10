import React, {useState} from 'react'
import { View, Text, Button, TextInput } from 'react-native';

export default function TextInputScreen() {
    const [text, setText] = useState ('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{margin: 20 }}> This is a Text Input example</Text>
<TextInput value={text} placeholder='Write here...' style={{ height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setText(text)} />
   <Text style={{margin: 20 }} >Transcription: </Text>
    <Text style={{margin: 20 }}> {text}</Text>

    <Button title='Erase text' onPress={() => setText('')}></Button>
      </View>
    )
}

