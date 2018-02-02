import React, {Component} from 'react'
import {TouchableHighlight as NativeTouchableHighlight} from 'react-native'
import {Prism} from 'react-native-prism'

class TouchableHighlight extends Component {

  static propTypes = NativeTouchableHighlight.propTypes

  render () {
    return (
      <NativeTouchableHighlight {...this.props}>
        {this.props.children}
      </NativeTouchableHighlight>
    )
  }
}

export default Prism(TouchableHighlight)
