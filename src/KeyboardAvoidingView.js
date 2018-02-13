import React, {Component} from 'react'
import {KeyboardAvoidingView as NativeKeyboardAvoidingView} from 'react-native'
import {Prism} from 'react-native-prism'

class KeyboardAvoidingView extends Component {

  static styleName = 'KeyboardAvoidingView'
  static propTypes = NativeKeyboardAvoidingView.propTypes

  render () {
    return (
      <NativeKeyboardAvoidingView {...this.props}>
        {this.props.children}
      </NativeKeyboardAvoidingView>
    )
  }
}

export default Prism(KeyboardAvoidingView)
