import React, {Component} from 'react'
import {TextInput as NativeTextInput} from 'react-native'
import {Prism} from 'react-native-prism'

class TextInput extends Component {
  render () {
    return (
      <NativeTextInput {...this.props}>
        {this.props.children}
      </NativeTextInput>
    )
  }
}

export default Prism(TextInput)
