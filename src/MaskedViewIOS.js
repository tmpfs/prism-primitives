import React, {Component} from 'react'
import {MaskedViewIOS as NativeMaskedViewIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class MaskedViewIOS extends Component {
  render () {
    return (
      <NativeMaskedViewIOS {...this.props}>
        {this.props.children}
      </NativeMaskedViewIOS>
    )
  }
}

export default Prism(MaskedViewIOS)
