import React, {Component} from 'react'
import {StatusBar as NativeStatusBar} from 'react-native'
import {Prism} from 'react-native-prism'

class StatusBar extends Component {

  static styleName = 'StatusBar'
  static propTypes = NativeStatusBar.propTypes

  render () {
    return (
      <NativeStatusBar {...this.props}>
        {this.props.children}
      </NativeStatusBar>
    )
  }
}

export default Prism(StatusBar)
