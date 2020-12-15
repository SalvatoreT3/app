import React from 'react'
import {View, Text} from 'react-native'

export default function InfoBox({children}) {

    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth()
    const fulldate = date+'/'+month
    return (
       <View>
           <Text>
                {children}
           </Text>
           <Text>
                {fulldate}
           </Text>
       </View>
    )
}

