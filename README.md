<h1 align="center">Prism Primitives</h1>
<p align="center">React Native primitives for <a href="https://github.com/fika-community/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/fika-community/prism/master/prism.png" />
</p>

---

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Getting Started](#getting-started)
- [Implementation](#implementation)
- [Notes](#notes)
- [License](#license)

---

## Installation

Use your preferred package manager for installation.

```
npm i --save react-native-prism-primitives
yarn add react-native-prism-primitives
```

## Synopsis

React Native primitives integrated with [Prism](https://github.com/fika-community/prism) designed to reduce the cognitive load during migration or integration.

This library exposes all the React Native visual components wrapped using the `Prism()` function. Class names are identical so it is a drop-in replacement.

The API is considered locked and changes will only be made for bugs or if the underlying RN components being tracked change.

Bug fixes will be released under patch versions, new RN components under minor releases and major changes to the underlying RN components (deletions) will be tracked via major version releases.

## Getting Started

Configure your application (see the Prism [Getting Started](https://github.com/fika-community/prism#getting-started) guide) and then you can import your visual components from `react-native-prism-primitives` to use the [Prism Properties](https://github.com/fika-community/prism#properties) in your application.

```javascript
import {
  Text,
  View
} from 'react-native-prism-primitives'
```

You can now define default style declarations for the primitive components in your style sheet:

```javascript
export default ({colors, fonts}) => {
  return {
    View: {
      flex: 1
    },
    Text: {
      fontFamily: fonts.regular,
      fontSize: 18,
      color: colors.muted
    }
  }
}
```

## Implementation

The components are very thin wrappers around the RN components and do not add any extra functionality apart from that enabled by [Prism](https://github.com/fika-community/prism).

```javascript
import React, {Component} from 'react'
import {Text as NativeText} from 'react-native'
import {Prism} from 'react-native-prism'

class Text extends Component {
  render () {
    return (
      <NativeText {...this.props}>
        {this.props.children}
      </NativeText>
    )
  }
}

export default Prism(Text)
```

## Notes

This library only exposes the *visual components*. API components (such as `Platform`) should still be imported directly from `react-native`.

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on January 31, 2018

[prism]: https://github.com/fika-community/prism
[getting started]: https://github.com/fika-community/prism#getting-started
[prism properties]: https://github.com/fika-community/prism#properties

