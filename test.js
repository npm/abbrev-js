var abbrev = require('./abbrev.js')
var t = require('tap')
var util = require("util")

var count = 0

function test (list, expect) {
  var actual = abbrev(list)
  t.deepEqual(actual, expect,
    "abbrev("+util.inspect(list)+") === " + util.inspect(expect) + "\n"+
    "actual: "+util.inspect(actual))
  actual = abbrev.apply(exports, list)
  t.deepEqual(abbrev.apply(exports, list), expect,
    "abbrev("+list.map(JSON.stringify).join(",")+") === " + util.inspect(expect) + "\n"+
    "actual: "+util.inspect(actual))
}

test([ "ruby", "ruby", "rules", "rules", "rules" ],
{ rub: 'ruby'
, ruby: 'ruby'
, rul: 'rules'
, rule: 'rules'
, rules: 'rules'
})
test(["fool", "foom", "pool", { toString: function () { return "pope" } }],
{ fool: 'fool'
, foom: 'foom'
, poo: 'pool'
, pool: 'pool'
, pop: 'pope'
, pope: 'pope'
})
test(["a", "ab", "abc", "abcd", "abcde", "acde"],
{ a: 'a'
, ab: 'ab'
, abc: 'abc'
, abcd: 'abcd'
, abcde: 'abcde'
, ac: 'acde'
, acd: 'acde'
, acde: 'acde'
})

t.notOk([].abbrev)
t.notOk({}.abbrev)

abbrev.monkeyPatch()

t.isa([].abbrev, 'function')
t.isa({}.abbrev, 'function')

var list = ['pool', 'pope', 'fool', 'floop', 'flu']
t.same(list.abbrev(), abbrev(list))
list = list.reduce(function (s, k) { s[k]=true; return s }, {})
t.same(list.abbrev(), abbrev(Object.keys(list)))
