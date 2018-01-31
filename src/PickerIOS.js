import React, {Component} from 'react'
import {PickerIOS as NativePickerIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class PickerIOS extends Component {
  render () {
    return (
      <NativePickerIOS {...this.props}>
        {this.props.children}
      </NativePickerIOS>
    )
  }
}

export default Prism(PickerIOS)
