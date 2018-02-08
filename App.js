import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'
import {
  Text,
  View
} from './src'

import theme from './theme'

const registry = new StyleRegistry({theme})
Prism.configure(registry,{extendedProperties: true, colorNames: true})

export default class App extends Component<{}> {
  render () {
    return (
      <View background='backgroundGreen'>
        <View
          margin={20}
          padding={10}
          background='green'
          border={[4, 'cream']}>
            <Text
              border='cream'
              padding={20}
              align='center'
              //color='muted'
              size={18}
              //error
              margin={[10, 20]}>
                Minimal, idiomatic style management for React Native.
              </Text>
          </View>
      </View>
    )
  }
}
