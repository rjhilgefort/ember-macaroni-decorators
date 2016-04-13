import macroAlias from 'ember-computed-decorators/macro-alias';
import macaroni from 'ember-macaroni';
// collection
export var filterContains = macroAlias(macaroni.filterContains);
export var filterKey = macroAlias(macaroni.filterKey);
export var findKey = macroAlias(macaroni.findKey);
export var find = macroAlias(macaroni.find);
export var reduceKey = macroAlias(macaroni.reduceKey);
export var reduce = macroAlias(macaroni.reduce);
export var rejectKey = macroAlias(macaroni.rejectKey);
export var reject = macroAlias(macaroni.reject);
export var withoutKey = macroAlias(macaroni.withoutKey);
export var without = macroAlias(macaroni.without);
// truth
export var equalKey = macroAlias(macaroni.equalKey);
export var ternaryKey = macroAlias(macaroni.ternaryKey);
export var ternary = macroAlias(macaroni.ternary);
export var gteKey = macroAlias(macaroni.gteKey);
export var gtKey = macroAlias(macaroni.gtKey);
export var lteKey = macroAlias(macaroni.lteKey);
export var ltKey = macroAlias(macaroni.ltKey);
// general
export var getPropertiesByKeys = macroAlias(macaroni.getPropertiesByKeys);
export var join = macroAlias(macaroni.join);
export var joinWith = macroAlias(macaroni.joinWith);
