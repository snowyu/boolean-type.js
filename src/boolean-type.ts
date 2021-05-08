import isString from 'util-ex/lib/is/type/string'
import isNumber from 'util-ex/lib/is/type/number'
import isBoolean from 'util-ex/lib/is/type/boolean'

import {
  Type,
  register,
  defineProperties,
  ITypeObjectOptions,
} from 'abstract-type'

export class BooleanType extends Type {
  declare static boolNames: { false: string[]; true: string[] }
  declare boolNames: { false: string[]; true: string[] }

  static toValue(aString, aOptions?) {
    let result: boolean | null | undefined
    if (isString(aString) && aString.length) {
      aString = aString.toLowerCase()
      const vBoolNames = aOptions?.boolNames || this.boolNames
      if (vBoolNames.false.indexOf(aString) !== -1) {
        result = false
      } else if (vBoolNames.true.indexOf(aString) !== -1) {
        result = true
      } else {
        result = null
      }
    } else if (isNumber(aString)) {
      result = Boolean(aString)
    } else {
      result = aString
    }
    return result
  }

  _validate(aValue, aOptions: ITypeObjectOptions): boolean {
    aValue = BooleanType.toValue(aValue, aOptions)
    const result = isBoolean(aValue)
    return result
  }
}

defineProperties(BooleanType, {
  boolNames: {
    type: 'Object',
    value: {
      false: ['false', 'no'],
      true: ['true', 'yes'],
    },
  },
})

register(BooleanType, { aliases: ['boolean', 'Bool', 'bool'] })
