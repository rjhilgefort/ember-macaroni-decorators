import Ember from 'ember';
import { test, module } from 'qunit';
/* jshint ignore:start */
import {
  // collection
  filterContains,
  filterKey,
  findKey,
  find,
  reduceKey,
  reduce,
  rejectKey,
  reject,
  withoutKey,
  without,
  // truth
  equalKey,
  ternaryKey,
  ternary,
  gteKey,
  gtKey,
  lteKey,
  ltKey,
  // general
  getPropertiesByKeys,
  join,
  joinWith
} from 'ember-macaroni-decorators';
/* jshint ignore:end */

module('Exports Decorators', {});

test('Exports all objects', (assert) => {
  assert.expect(20);
  const testObject = Ember.Object.extend({
    /* jshint ignore:start */
    @filterContains('collectionKey', 'id', [1]) filterContainsFoo,
    @filterKey('collectionKey', 'id', 'valueKey') filterKeyFoo,
    @findKey('collectionKey', 'id', 'valueKey') findKeyFoo,
    @find('collectionKey', 'id', 1) findFoo,
    @reduceKey('collectionKey', 'dependentKeyProp', 0) reduceKeyFoo,
    @reduce('collectionKey', 'id', 0) reduceFoo,
    @rejectKey('collectionKey', 'id', 'valueKey') rejectKeyFoo,
    @reject('collectionKey', 'id', 1) rejectFoo,
    @withoutKey('collectionArray', 'propName') withoutKeyFoo,
    @without('collectionArray', 1) withoutFoo,
    @equalKey('firstKey', 'secondKey') equalKeyFoo,
    @ternaryKey('conditionalKey', 'firstKey', 'secondKey') ternaryKeyFoo,
    @ternary('conditionalKey', '1', '2') ternaryFoo,
    @gteKey('lhsKey','rhsKey') gteKeyFoo,
    @gtKey('lhsKey','rhsKey') gtKeyFoo,
    @lteKey('lhsKey','rhsKey') lteKeyFoo,
    @ltKey('lhsKey','rhsKey') ltKeyFoo,
    @getPropertiesByKeys('firstKey', 'secondKey') getPropertiesByKeysFoo,
    @join('firstKey', 'secondKey') joinFoo,
    @joinWith(' ', 'firstKey', 'secondKey') joinWithFoo
    /* jshint ignore:end */
  });
  const obj = testObject.create({
    collectionKey: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
    valueKey: 1,
    dependentKeyProp: 'id',
    collectionArray: [1, 2, 3],
    propName: 1,
    firstKey: 1,
    secondKey: 1,
    conditionalKey: true,
    lhsKey: 1,
    rhsKey: 2
  });
  assert.deepEqual(obj.get('filterContainsFoo'), [{ id: 1, name: 'foo' }], 'filterContains exported');
  assert.deepEqual(obj.get('filterKeyFoo'), [{ id: 1, name: 'foo' }], 'filterKey exported');
  assert.deepEqual(obj.get('findKeyFoo'), { id: 1, name: 'foo' }, 'findKey exported');
  assert.deepEqual(obj.get('findFoo'), { id: 1, name: 'foo' }, 'find exported');
  assert.equal(obj.get('reduceKeyFoo'), 3, 'reduceKey exported');
  assert.equal(obj.get('reduceFoo'), 3, 'reduce exported');
  assert.deepEqual(obj.get('rejectKeyFoo'), [{ id: 2, name: 'bar' }], 'rejectKey exported');
  assert.deepEqual(obj.get('rejectFoo'), [{ id: 2, name: 'bar' }], 'reject exported');
  assert.deepEqual(obj.get('withoutKeyFoo'), [2, 3], 'withoutKey exported');
  assert.deepEqual(obj.get('withoutFoo'), [2, 3], 'without exported');
  assert.equal(obj.get('equalKeyFoo'), true, 'equalKey exported');
  assert.equal(obj.get('ternaryKeyFoo'), 1, 'ternaryKey exported');
  assert.equal(obj.get('ternaryFoo'), '1', 'ternary exported');
  assert.equal(obj.get('gteKeyFoo'), false, 'gteKey exported');
  assert.equal(obj.get('gtKeyFoo'), false, 'gtKey exported');
  assert.equal(obj.get('lteKeyFoo'), true, 'lteKey exported');
  assert.equal(obj.get('ltKeyFoo'), true, 'ltKey exported');
  assert.deepEqual(obj.get('getPropertiesByKeysFoo'), { firstKey: 1, secondKey: 1 }, 'getPropertiesByKeys exported');
  assert.equal(obj.get('joinFoo'), '1 1', 'join exported');
  assert.equal(obj.get('joinWithFoo'), '1 1', 'joinWith exported');
});
