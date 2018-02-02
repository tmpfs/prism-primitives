import React, {Component} from 'react'
import {DatePickerIOS as NativeDatePickerIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class DatePickerIOS extends Component {

  static propTypes = NativeDatePickerIOS.propTypes

  render () {
    return (
      <NativeDatePickerIOS {...this.props}>
        {this.props.children}
      </NativeDatePickerIOS>
    )
  }
}

export default Prism(DatePickerIOS)

