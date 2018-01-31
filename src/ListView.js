import React, {Component} from 'react'
import {ListView as NativeListView} from 'react-native'
import {Prism} from 'react-native-prism'

class ListView extends Component {
  render () {
    return (
      <NativeListView {...this.props}>
        {this.props.children}
      </NativeListView>
    )
  }
}

export default Prism(ListView)
