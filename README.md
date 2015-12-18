# ember-macaroni-decorators

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
import { gt } from 'ember-macaroni-decorators';

export default Ember.Object.create({
  first: 5,
  second: 2,
  @gt('first', 'second') isFirstGreaterThanSecond, // true
});
```

## Implemented Computed Methods

- `findFromCollectionByKey`
- `findFromCollectionByValue`
- `rejectFromCollectionByKey`
- `rejectFromCollectionByValue`
- `filterFromCollectionByKey`
- `filterFromCollectionByContains`
- `collectionWithoutKey`
- `reduceCollectionByKey`
- `isEqualByKeys`
- `ifThenElseWithKeys`
- `ifThenElseWithValues`
- `gte`
- `gt`
- `lte`
- `lt`
- `getPropertiesByKeys`
- `joinWith`
