import React, {Component} from 'react'
import {NavigatorIOS as NativeNavigatorIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class NavigatorIOS extends Component {
  render () {
    return (
      <NativeNavigatorIOS {...this.props}>
        {this.props.children}
      </NativeNavigatorIOS>
    )
  }
}

export default Prism(NavigatorIOS)
