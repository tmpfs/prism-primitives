import React, {Component} from 'react'
import {TabBarIOS as NativeTabBarIOS} from 'react-native'
import {Prism} from 'react-native-prism'
const NativeTabBarIOSItem = NativeTabBarIOS.Item

class TabBarIOS extends Component {
  render () {
    return (
      <NativeTabBarIOS {...this.props}>
        {this.props.children}
      </NativeTabBarIOS>
    )
  }
}

class TabBarIOSItem extends Component {
  render () {
    return (
      <NativeTabBarIOSItem {...this.props}>
        {this.props.children}
      </NativeTabBarIOSItem>
    )
  }
}

const hoc = Prism(TabBarIOS)
hoc.Item = Prism(TabBarIOSItem)
export default hoc
