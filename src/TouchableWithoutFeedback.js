import React, {Component} from 'react'
import {TouchableWithoutFeedback as NativeTouchableWithoutFeedback} from 'react-native'
import {Prism} from 'react-native-prism'

class TouchableWithoutFeedback extends Component {

  static propTypes = NativeTouchableWithoutFeedback.propTypes

  render () {
    return (
      <NativeTouchableWithoutFeedback {...this.props}>
        {this.props.children}
      </NativeTouchableWithoutFeedback>
    )
  }
}

export default Prism(TouchableWithoutFeedback)
