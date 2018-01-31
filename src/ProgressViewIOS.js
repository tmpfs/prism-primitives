import React, {Component} from 'react'
import {ProgressViewIOS as NativeProgressViewIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class ProgressViewIOS extends Component {
  render () {
    return (
      <NativeProgressViewIOS {...this.props}>
        {this.props.children}
      </NativeProgressViewIOS>
    )
  }
}

export default Prism(ProgressViewIOS)
