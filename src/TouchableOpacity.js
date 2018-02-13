import React, {Component} from 'react'
import {TouchableOpacity as NativeTouchableOpacity} from 'react-native'
import {Prism} from 'react-native-prism'

class TouchableOpacity extends Component {

  static styleName = 'TouchableOpacity'
  static propTypes = NativeTouchableOpacity.propTypes

  render () {
    return (
      <NativeTouchableOpacity {...this.props}>
        {this.props.children}
      </NativeTouchableOpacity>
    )
  }
}

export default Prism(TouchableOpacity)
