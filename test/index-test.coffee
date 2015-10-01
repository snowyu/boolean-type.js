chai            = require 'chai'
sinon           = require 'sinon'
sinonChai       = require 'sinon-chai'
should          = chai.should()
expect          = chai.expect
assert          = chai.assert
chai.use(sinonChai)

setImmediate    = setImmediate || process.nextTick

BooleanType            = require '../src'

describe 'Boolean', ->
  boolean = BooleanType()

  it 'should be exist boolean type', ->
    expect(boolean).to.be.instanceOf BooleanType
    boolean.pathArray().should.be.deep.equal ['type', boolean.name]

  describe 'boolNames', ->
    it 'should set boolean names', ->
      vBoolNames =
        false: ['false', 'no', 'wrong']
        true:  ['true', 'yes', 'ok']
      result = boolean.createType boolNames: vBoolNames
      expect(result.boolNames).to.be.deep.equal vBoolNames
      expect(result.create('wrong').valueOf()).to.be.false
      expect(result.create('ok').valueOf()).to.be.true

  describe '.validate', ->
    it 'should validate boolean value', ->
      expect(boolean.validate(112), '112').to.be.true
      expect(boolean.validate(0), '0').to.be.true
      expect(boolean.validate('true'), 'true').to.be.true
      expect(boolean.validate('yes')).to.be.true
      expect(boolean.validate('false')).to.be.true
      expect(boolean.validate('no')).to.be.true
      expect(boolean.validate.bind(boolean,[])).to.be.throw 'an invalid ' + boolean.name
      expect(boolean.validate.bind(boolean,'noSuchBoolName')).to.be.throw 'an invalid ' + boolean.name
      expect(boolean.create(112).valueOf()).to.be.true
      expect(boolean.create(0).valueOf()).to.be.false
      expect(boolean.create('true').valueOf(), 'true').to.be.true
      expect(boolean.create('yes').valueOf(), 'yes').to.be.true
      expect(boolean.create('false').valueOf(), 'false').to.be.false
      expect(boolean.create('no').valueOf(), 'no').to.be.false

  describe '.cloneType', ->
    it 'should clone type', ->
      t = boolean.createType
        false: ['wrong']
        true: ['ok']
      result = t.cloneType()
      expect(t.isSame result).to.be.true
