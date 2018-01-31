import React, {Component} from 'react'
import {Modal as NativeModal} from 'react-native'
import {Prism} from 'react-native-prism'

class Modal extends Component {
  render () {
    return (
      <NativeModal {...this.props}>
        {this.props.children}
      </NativeModal>
    )
  }
}

export default Prism(Modal)
