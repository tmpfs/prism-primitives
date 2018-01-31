<h1 align="center">Prism Primitives</h1>
<p align="center">React Native primitives for <a href="https://github.com/fika-community/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/fika-community/prism/master/prism.png" />
</p>

---

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Getting Started](#getting-started)
- [License](#license)

---

## Installation

Use your preferred package manager for installation.

```
npm i --save react-native-prism-primitives
yarn add react-native-prism-primitives
```

## Synopsis

React Native primitives integrated with [Prism](https://github.com/fika-community/prism) designed to reduce the cognitive load when migrating to or integrating with [Prism](https://github.com/fika-community/prism).

This library exposes all the React Native visual components ready for use with [Prism](https://github.com/fika-community/prism) so is a drop-in replacement.

## Getting Started

Configure your application (see the Prism [Getting Started](https://github.com/fika-community/prism#getting-started) guide) and then you can import your visual components from `react-native-prism-primitives` to use the [Prism](https://github.com/fika-community/prism) properties in your application.

```javascript
import {Text} from 'react-native'
```

```javascript
import {Text} from 'react-native-prism-primitives'
```

You can now also define default style declarations for the primitive components in your style sheet:

```javascript
export default ({colors, fonts}) => {
  return {
    View: {
      flex: 1
    },
    Text: {
      fontFamily: fonts.regular,
      color: colors.muted
    }
  }
}
```

## License

MIT

---

Created by [mkdoc](https://github.com/mkdoc/mkdoc) on January 31, 2018

[prism]: https://github.com/fika-community/prism
[getting started]: https://github.com/fika-community/prism#getting-started

