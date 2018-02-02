import React, {Component} from 'react'
import {Image as NativeImage} from 'react-native'
import {Prism} from 'react-native-prism'

class Image extends Component {

  static styleOptions = () => {
    return {
      supportsDimension: true
    }
  }

  static propTypes = NativeImage.propTypes

  render () {
    return (
      <NativeImage {...this.props}>
        {this.props.children}
      </NativeImage>
    )
  }
}

export default Prism(Image)
