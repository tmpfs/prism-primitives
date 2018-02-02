import React, {Component} from 'react'
import {RefreshControl as NativeRefreshControl} from 'react-native'
import {Prism} from 'react-native-prism'

class RefreshControl extends Component {

  static propTypes = NativeRefreshControl.propTypes

  render () {
    return (
      <NativeRefreshControl {...this.props}>
        {this.props.children}
      </NativeRefreshControl>
    )
  }
}

export default Prism(RefreshControl)
