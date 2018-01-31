import React, {Component} from 'react'
import {Text as NativeText} from 'react-native'
import {Prism} from 'react-native-prism'

class Text extends Component {
  render () {
    return (
      <NativeText {...this.props}>
        {this.props.children}
      </NativeText>
    )
  }
}

export default Prism(Text)
