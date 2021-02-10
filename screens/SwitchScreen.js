import React, {useState} from 'react'
import { View, Text, Button, Switch} from 'react-native';

function SwitchScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled)
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
           <Text style={{paddingBottom:20, fontSize:25}} > Hey, this is a Switch example</Text>
           <Switch trackColor={{false: "#767577", true: "#81b0ff"}}
        
           ios_backgroundColor="#3e3e3e"
           onValueChange={toggleSwitch}
           value={isEnabled} />
           <Text style={{padding:20, fontSize:20}}> {isEnabled? "Yeah, I'm enabled ": 'Why did you disable me??'}</Text>
           <Switch trackColor={{false: "lightBlue ", true: "pink"}}
            thumbColor={isEnabled ? "red" : "#f4f3f4"}
           ios_backgroundColor="#3e3e3e"
           onValueChange={toggleSwitch}
           value={isEnabled} />
        </View>
    )
}

export default SwitchScreen;
