import React, { useState } from "react";
import { TextInput, View } from 'react-native'

export default function Input() {

    const [text, setText] = useState('')
    return (

        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setText(text)}
                value={text}
            />
        </View>
    )
}