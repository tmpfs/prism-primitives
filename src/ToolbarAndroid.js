import React, {Component} from 'react'
import {ToolbarAndroid as NativeToolbarAndroid} from 'react-native'
import {Prism} from 'react-native-prism'

class ToolbarAndroid extends Component {

  static styleName = 'ToolbarAndroid'
  static propTypes = NativeToolbarAndroid.propTypes

  render () {
    return (
      <NativeToolbarAndroid {...this.props}>
        {this.props.children}
      </NativeToolbarAndroid>
    )
  }
}

export default Prism(ToolbarAndroid)
