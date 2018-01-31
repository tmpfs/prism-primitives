import React, {Component} from 'react'
import {View as NativeView} from 'react-native'
import {Prism} from 'react-native-prism'
import NameSpace from './NameSpace'

class View extends Component {
  render () {
    const {style} = this.props
    return (
      <NativeView
        {...this.props}
        style={style}>
        {this.props.children}
      </NativeView>
    )
  }
}

export default Prism(View, NameSpace)
