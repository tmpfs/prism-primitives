import React, {Component} from 'react'
import {VirtualizedList as NativeVirtualizedList} from 'react-native'
import {Prism} from 'react-native-prism'

class VirtualizedList extends Component {

  static styleName = 'VirtualizedList'
  static propTypes = NativeVirtualizedList.propTypes

  render () {
    return (
      <NativeVirtualizedList {...this.props}>
        {this.props.children}
      </NativeVirtualizedList>
    )
  }
}

export default Prism(VirtualizedList)
