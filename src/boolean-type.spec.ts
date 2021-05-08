import 'jest-extended'

import { BooleanType } from './boolean-type'

describe('BooleanType', () => {
  const boolean = new BooleanType()

  it('should be exist boolean type', () => {
    expect(boolean).toBeInstanceOf(BooleanType)
    expect(BooleanType.pathArray()).toEqual(['type', boolean.name])
  })

  describe('boolNames', () => {
    it('should set boolean names', () => {
      const boolNames = {
        false: ['false', 'no', 'wrong'],
        true: ['true', 'yes', 'ok'],
      }
      let result = new BooleanType({ boolNames })
      expect(result.boolNames).toEqual(boolNames)
      result = result.clone({ value: 'wrong' }) as BooleanType
      expect(result.valueOf()).toBeFalse()
      expect(result.clone({ value: 'ok' }).valueOf()).toBeTrue()
    })
  })

  describe('.toValue', () => {
    it('should convert a value to boolean', () => {
      expect(BooleanType.toValue('true')).toBeTrue()
    })
  })

  describe('validate', () => {
    it('should validate boolean value', () => {
      expect(boolean.validate(112)).toBeTrue()
      expect(boolean.validate(0)).toBeTrue()
      expect(boolean.validate('true')).toBeTrue()
      expect(boolean.validate('yes')).toBeTrue()
      expect(boolean.validate('false')).toBeTrue()
      expect(boolean.validate('no')).toBeTrue()
      expect(boolean.validate.bind(boolean, [])).toThrow(
        'an invalid ' + boolean.name
      )
      expect(boolean.validate.bind(boolean, 'noSuchBoolName')).toThrow(
        'an invalid ' + boolean.name
      )
      expect(new BooleanType(112).valueOf()).toBeTrue()
      expect(new BooleanType(0).valueOf()).toBeFalse()
      expect(new BooleanType('true').valueOf()).toBeTrue()
      expect(new BooleanType('yes').valueOf()).toBeTrue()
      expect(new BooleanType('false').valueOf()).toBeFalse()
      expect(new BooleanType('no').valueOf()).toBeFalse()
    })
  })

  describe('clone', () => {
    it('should clone a value', () => {
      const t = new BooleanType({
        false: ['wrong'],
        true: ['ok'],
      })
      const result = t.clone()
      expect(t.isSame(result)).toBeTrue()
    })
  })
})
