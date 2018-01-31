import React, {Component} from 'react'
import {FlatList as NativeFlatList} from 'react-native'
import {Prism} from 'react-native-prism'

class FlatList extends Component {
  render () {
    return (
      <NativeFlatList {...this.props}>
        {this.props.children}
      </NativeFlatList>
    )
  }
}

export default Prism(FlatList)
