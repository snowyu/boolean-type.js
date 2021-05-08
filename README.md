## boolean-type [![npm][npm-svg]][npm]

[![Build Status][travis-svg]][travis]
[![Code Climate][codeclimate-svg]][codeclimate]
[![Test Coverage][codeclimate-test-svg]][codeclimate-test]
[![downloads][npm-download-svg]][npm]
[![license][npm-license-svg]][npm]

[npm]: https://npmjs.org/package/boolean-type
[npm-svg]: https://img.shields.io/npm/v/boolean-type.svg
[npm-download-svg]: https://img.shields.io/npm/dm/boolean-type.svg
[npm-license-svg]: https://img.shields.io/npm/l/boolean-type.svg
[travis-svg]: https://img.shields.io/travis/snowyu/boolean-type.js/master.svg
[travis]: http://travis-ci.org/snowyu/boolean-type.js
[codeclimate-svg]: https://codeclimate.com/github/snowyu/boolean-type.js/badges/gpa.svg
[codeclimate]: https://codeclimate.com/github/snowyu/boolean-type.js
[codeclimate-test-svg]: https://codeclimate.com/github/snowyu/boolean-type.js/badges/coverage.svg
[codeclimate-test]: https://codeclimate.com/github/snowyu/boolean-type.js/coverage

The boolean type info object.

## Usage

```js

import { BooleanType } from 'boolean-type'

var b = new BooleanType('true', {
  boolNames: {
    false: ['false', 'no', 'wrong']
    true:  ['true', 'yes', 'ok']
  }
})
//or b= Bool.create('yes')
//or b= Bool.create('ok')
console.log(String(b))
//=true
console.log(b.isValid())
//=true
console.log(s.toJson()))
//="true"
console.log(s.toJson({withType:true})))
//='{"value":"true","name":"Boolean","boolNames":{"false":["false","no","wrong"],"true":["true","yes","ok"]}}'
n.assign('w')
//=TypeError: "w" is an invalid Boolean
n.assign('wrong')
//n.valueOf()=false
```

## API

See [abstract-type](https://github.com/snowyu/abstract-type.js)

## TODO


## License

MIT
