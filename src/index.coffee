isString        = require 'util-ex/lib/is/type/string'
isNumber        = require 'util-ex/lib/is/type/number'
isBoolean       = require 'util-ex/lib/is/type/boolean'
Attributes      = require 'abstract-type/lib/attributes'
Type            = require 'abstract-type'
register        = Type.register
aliases         = Type.aliases

module.exports = class BooleanType
  register BooleanType
  aliases  BooleanType, 'boolean', 'Bool', 'bool'

  constructor: ->
    return super

  $attributes: Attributes
    boolNames:
      type: 'Object'
      #enumerable: false
      value:
        false: ['false', 'no']
        true:  ['true', 'yes']

  valueToString: (aValue)->
    aValue = String(aValue)
  toValue: (aString)->
    if isString(aString) and aString.length
      aString = aString.toLowerCase()
      if aString in @boolNames[false]
        result = false
      else if aString in @boolNames[true]
        result = true
      else
        result = null
    else if isNumber aString
      result = Boolean(aString)
    else
      result = aString
    result
  _validate: (aValue, aOptions)->
    aValue = @toValue(aValue)
    result = isBoolean aValue
