import React, {Component} from 'react'
import {ActivityIndicator as NativeActivityIndicator} from 'react-native'
import {Prism} from 'react-native-prism'

class ActivityIndicator extends Component {
  render () {
    return (
      <NativeActivityIndicator {...this.props}>
        {this.props.children}
      </NativeActivityIndicator>
    )
  }
}

export default Prism(ActivityIndicator)
