import React, {Component} from 'react'
import {Switch as NativeSwitch} from 'react-native'
import {Prism} from 'react-native-prism'

class Switch extends Component {
  render () {
    return (
      <NativeSwitch {...this.props}>
        {this.props.children}
      </NativeSwitch>
    )
  }
}

export default Prism(Switch)
