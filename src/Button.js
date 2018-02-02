import React, {Component} from 'react'
import {Button as NativeButton} from 'react-native'
import {Prism} from 'react-native-prism'

class Button extends Component {

  static propTypes = NativeButton.propTypes

  render () {
    return (
      <NativeButton {...this.props}>
        {this.props.children}
      </NativeButton>
    )
  }
}

export default Prism(Button)
