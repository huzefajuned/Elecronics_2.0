React Sidebar
===============

Styled off-canvas sidebar component for React with a variety of CSS transitions.

[![NPM](https://img.shields.io/npm/v/react-sidebar-styled.svg)](https://www.npmjs.com/package/react-sidebar-styled) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-circle)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/alexcasche/reactrix-sidebar.svg)](https://img.shields.io/travis/alexcasche/react-sidebar-styled)


Install
---------------

```bash
npm install --save react-sidebar-styled
yarn add reactrix-sidebar-styled
```

Usage
---------------
- Import the module along with the base styles
- Pass desired props to component using spread operator
<br/><br/>

```jsx
import React, { Component } from 'react'
import ReactSidebar from 'react-sidebar-styled'

class ReactSidebar extends Component {
  render () {
    const options = {
      side: "left",
      effect: "slide-out",
      speed: 250,
      timing: 'ease-in-out'
    }
    return (
      <Sidebar {...options}>
        <div>Menu Goes Here</div>
        <div>Page Goes Here</div>
      </Sidebar>
    )
  }
}
```

Features
---------------
- Only one dependency (styled-components)
- Only two peer depencies (react/prop-types)
- Large selection of smooth transitions
- Easy to use BEM class hooks

Examples
---------------
- Demo - https://alexcasche.github.io/react-sidebar-styled/
- Sandbox - https://codesandbox.io/s/jlzno327x9

Props
---------------

| Prop              | Type        | Default          |   Description: Options   |
|-------------------|-------------|------------------|-------------|
| `side`            |  _string_   |  `left`          | Menu location: `left` `right` |
| `effect`          |  _string_   |  `slide`         | Transition effect: `slide` `push` `fall` `reveal` `diverge` `uncover` `shrink` `grow` `press` |
| `speed`           |  _number_   |  `500`           | Transition speed (milliseconds)  |
| `timing`          |  _string_   |  `ease`          | Transition timing function:   |
| `overlay`         |  _boolean_  |  `true`          | Display overlay: `true` `false` |
| `icons`           |  _array_    |  `[ close, open ]`     | Custom icons: `[ component, component ]`|

### Custom Icons  ##
Set the icons prop equal to an array consisting of two components.

```jsx
import { OpenIcon, CloseIcon } from './CustomIcons'
...
  const options = {
    icons: [ OpenIcon, CloseIcon ]
  }
...
  <Sidebar {...options} />
...

```

Classes
---------------
| Class                  | Description        |
|------------------------|--------------------|
| `.sidebar`             |  Outer component wrapper |
| `.sidebar__container`  |  Inner component wrapper  |
| `.sidebar__menu`       |  Outer menu wrapper  |
| `.sidebar__page`       |  Page content wrapper  |
| `.sidebar__overlay`    |  Page overlay  |
| `.sidebar__btn-open`   |  Open menu button  |
| `.sidebar__btn-close`  |  Close menu button  |


Development
---------------
Follow these steps to setup a local development environment.  Use yarn or npm - not both.
1. Clone the repo from Github

```bash
git clone https://github.com/alexcasche/react-sidebar-styled
```

2. Setup project & start rollup watch

```bash
npm install && npm start
yarn install && yarn add
```

3. Setup react app & start dev server

```bash
cd example
npm install && npm start
yarn install && yarn start
```

Shoutouts
---------------
- Inspiration: [react-burger-menu](https://github.com/negomi/react-burger-menu) 😍
- Setup: [ create-react-library ](https://github.com/transitive-bullshit/create-react-library) 🙌


License
---------------

MIT © [alexcasche](https://github.com/alexcasche)