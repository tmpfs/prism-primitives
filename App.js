import React, {Component} from 'react'
import {Prism, StyleRegistry} from 'react-native-prism'
import {
  Text,
  View
} from './src/index'

import Colors from './app/Colors'
import Fonts from './app/Fonts'
import StyleSheet from './app/StyleSheet'

const registry = new StyleRegistry()
registry.addColors(Colors)
registry.addFonts(Fonts)
registry.addStyleSheet(StyleSheet)
Prism.configure(
  registry,
  {
    debug: true,
    extendedProperties: true
  }
)


            //<ImageText
              //border='cream'
              //padding={20}
              //margin={[10, 20]}
              //width={96}
              //height={96}
              //size={24}
              //source={{uri: image}}>Prism</ImageText>

const image = 'https://raw.githubusercontent.com/fika-community/prism/master/prism.png'

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
              color='muted'
              size={18}
              //error
              margin={[10, 20]}>
                Minimal, idiomatic style management for React Native.
              </Text>

            <View direction='row' justify='center'>
            </View>
          </View>
      </View>
    )
  }
}
