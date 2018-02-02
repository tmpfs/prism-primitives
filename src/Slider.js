import React, {Component} from 'react'
import {Slider as NativeSlider} from 'react-native'
import {Prism} from 'react-native-prism'

class Slider extends Component {

  static propTypes = NativeSlider.propTypes

  render () {
    return (
      <NativeSlider {...this.props}>
        {this.props.children}
      </NativeSlider>
    )
  }
}

export default Prism(Slider)
