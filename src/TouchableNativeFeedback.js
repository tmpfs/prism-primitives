import React, {Component} from 'react'
import {TouchableNativeFeedback as NativeTouchableNativeFeedback} from 'react-native'
import {Prism} from 'react-native-prism'

class TouchableNativeFeedback extends Component {

  static propTypes = NativeTouchableNativeFeedback.propTypes

  render () {
    return (
      <NativeTouchableNativeFeedback {...this.props}>
        {this.props.children}
      </NativeTouchableNativeFeedback>
    )
  }
}

export default Prism(TouchableNativeFeedback)
