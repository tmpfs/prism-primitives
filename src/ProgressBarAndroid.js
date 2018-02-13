import React, {Component} from 'react'
import {ProgressBarAndroid as NativeProgressBarAndroid} from 'react-native'
import {Prism} from 'react-native-prism'

class ProgressBarAndroid extends Component {

  static styleName = 'ProgressBarAndroid'
  static propTypes = NativeProgressBarAndroid.propTypes

  render () {
    return (
      <NativeProgressBarAndroid {...this.props}>
        {this.props.children}
      </NativeProgressBarAndroid>
    )
  }
}

export default Prism(ProgressBarAndroid)
