import React, {Component} from 'react'
import {Picker as NativePicker} from 'react-native'
import {Prism} from 'react-native-prism'

class Picker extends Component {

  static propTypes = NativePicker.propTypes

  render () {
    return (
      <NativePicker {...this.props}>
        {this.props.children}
      </NativePicker>
    )
  }
}

export default Prism(Picker)
