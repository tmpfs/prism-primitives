import React, {Component} from 'react'
import {ViewPagerAndroid as NativeViewPagerAndroid} from 'react-native'
import {Prism} from 'react-native-prism'

class ViewPagerAndroid extends Component {
  render () {
    return (
      <NativeViewPagerAndroid {...this.props}>
        {this.props.children}
      </NativeViewPagerAndroid>
    )
  }
}

export default Prism(ViewPagerAndroid)
