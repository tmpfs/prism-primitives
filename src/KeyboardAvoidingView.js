import React, {Component} from 'react'
import {KeyboardAvoidingView as NativeKeyboardAvoidingView} from 'react-native'
import {Prism} from 'react-native-prism'

class KeyboardAvoidingView extends Component {
  render () {
    return (
      <NativeKeyboardAvoidingView {...this.props}>
        {this.props.children}
      </NativeKeyboardAvoidingView>
    )
  }
}

export default Prism(KeyboardAvoidingView)
