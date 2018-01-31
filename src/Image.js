import React, {Component} from 'react'
import {Image as NativeImage} from 'react-native'
import {Prism} from 'react-native-prism'

class Image extends Component {
  render () {
    return (
      <NativeImage {...this.props}>
        {this.props.children}
      </NativeImage>
    )
  }
}

export default Prism(Image)
