import React, {Component} from 'react'
import {DrawerLayoutAndroid as NativeDrawerLayoutAndroid} from 'react-native'
import {Prism} from 'react-native-prism'

class DrawerLayoutAndroid extends Component {

  static styleName = 'DrawerLayoutAndroid'
  static propTypes = NativeDrawerLayoutAndroid.propTypes

  render () {
    return (
      <NativeDrawerLayoutAndroid {...this.props}>
        {this.props.children}
      </NativeDrawerLayoutAndroid>
    )
  }
}

export default Prism(DrawerLayoutAndroid)
