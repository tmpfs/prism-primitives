import React, {Component} from 'react'
import {View as NativeView} from 'react-native'
import {Prism} from 'react-native-prism'

class View extends Component {

  static styleOptions = {
    supportsDimension: true
  }

  static propTypes = NativeView.propTypes

  render () {
    return (
      <NativeView {...this.props}>
        {this.props.children}
      </NativeView>
    )
  }
}

export default Prism(View)
