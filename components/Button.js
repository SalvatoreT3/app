import React from "react";
import { Text, Pressable } from "react-native"

export default function Button(props) {
    return (
        <Pressable onPress={onPressFunction}>
            <Text>{props.children}</Text>
        </Pressable>
    )
}