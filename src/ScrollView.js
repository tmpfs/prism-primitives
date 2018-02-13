import React, {Component} from 'react'
import {ScrollView as NativeScrollView} from 'react-native'
import {Prism} from 'react-native-prism'

class ScrollView extends Component {

  static styleName = 'ScrollView'
  static propTypes = NativeScrollView.propTypes

  render () {
    return (
      <NativeScrollView {...this.props}>
        {this.props.children}
      </NativeScrollView>
    )
  }
}

export default Prism(ScrollView)
