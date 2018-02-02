import React, {Component} from 'react'
import {SegmentedControlIOS as NativeSegmentedControlIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class SegmentedControlIOS extends Component {

  static propTypes = NativeSegmentedControlIOS.propTypes

  render () {
    return (
      <NativeSegmentedControlIOS {...this.props}>
        {this.props.children}
      </NativeSegmentedControlIOS>
    )
  }
}

export default Prism(SegmentedControlIOS)
