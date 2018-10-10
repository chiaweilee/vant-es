# Vant-ES
Use Vant as ES Modules

# Install

```js
npm install vant
```
* Then, *copy vant.js to your project*.

# Usage
```js
import './vant.js'
```

# Custom

Check your vant.js file, and comment out module(s) you don't need line by line

```js
const vant = {
    'actionsheet': require('vant/es/actionsheet').default,
    // 'address-edit': require('vant/es/address-edit').default, // I don't need it
    // 'address-list': require('vant/es/address-list').default, // I don't need it
    'area': require('vant/es/area').default,
    // ...
}
```

commented out module(s) will not be load (also CSS).
