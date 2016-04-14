# ember-macaroni-decorators

[![npm version](https://badge.fury.io/js/ember-macaroni-decorators.svg)](https://badge.fury.io/js/ember-macaroni-decorators) [![Build Status](https://travis-ci.org/rjhilgefort/ember-macaroni-decorators.svg?branch=master)](https://travis-ci.org/rjhilgefort/ember-macaroni-decorators) [![Ember Observer Score](https://emberobserver.com/badges/ember-macaroni-decorators.svg)](https://emberobserver.com/addons/ember-macaroni-decorators)
#### Decorators for computed properties in [ember-macaroni](https://github.com/poteto/ember-macaroni). This project version should stay in sync with `ember-macaroni` so the interface is consistent and expected.

## Installation

```shell
# ember-cli > 0.2.3
ember install ember-macaroni
ember install ember-macaroni-decorators
# ember-cli <= 0.2.3
ember install:addon ember-macaroni
ember install:addon ember-macaroni-decorators
```

## Usage

```javascript
import Ember from 'ember';
import { gtKey } from 'ember-macaroni-decorators';

export default Ember.Object.create({
  first: 5,
  second: 2,
  @gtKey('first', 'second') isFirstGreaterThanSecond, // true
});
```

## Implemented Computed Methods

- **Collection**
  - `filterContains`
  - `filterKey`
  - `findKey`
  - `find`
  - `reduceKey`
  - `reduce`
  - `rejectKey`
  - `reject`
  - `withoutKey`
  - `without`
- **Truth**
  - `equalKey`
  - `ternaryKey`
  - `ternary`
  - `gteKey`
  - `gtKey`
  - `lteKey`
  - `ltKey`
- **General**
  - `getPropertiesByKeys`
  - `join`
  - `joinWith`
