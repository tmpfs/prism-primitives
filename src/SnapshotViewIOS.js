import React, {Component} from 'react'
import {SnapshotViewIOS as NativeSnapshotViewIOS} from 'react-native'
import {Prism} from 'react-native-prism'

class SnapshotViewIOS extends Component {
  render () {
    return (
      <NativeSnapshotViewIOS {...this.props}>
        {this.props.children}
      </NativeSnapshotViewIOS>
    )
  }
}

export default Prism(SnapshotViewIOS)
