const t = require('node:test')
const a = require('node:assert')
const abbrev = require('../')
const util = require('util')

const suite = [
  [
    ['ruby', 'ruby', 'rules', 'rules', 'rules'],
    { rub: 'ruby',
      ruby: 'ruby',
      rul: 'rules',
      rule: 'rules',
      rules: 'rules',
    },
  ], [
    ['fool', 'foom', 'pool', { toString: () => 'pope' }],
    { fool: 'fool',
      foom: 'foom',
      poo: 'pool',
      pool: 'pool',
      pop: 'pope',
      pope: 'pope',
    },
  ], [
    ['a', 'ab', 'abc', 'abcd', 'abcde', 'acde'],
    { a: 'a',
      ab: 'ab',
      abc: 'abc',
      abcd: 'abcd',
      abcde: 'abcde',
      ac: 'acde',
      acd: 'acde',
      acde: 'acde',
    },
  ], [
    ['a', 'ab', 'abc', 'abcd', 'abcde', 'acde'].reverse(),
    { a: 'a',
      ab: 'ab',
      abc: 'abc',
      abcd: 'abcd',
      abcde: 'abcde',
      ac: 'acde',
      acd: 'acde',
      acde: 'acde',
    },
  ],
]

for (let i = 0; i < suite.length; i++) {
  t.test(`test ${i}`, t => {
    const [list, expect] = suite[i]
    let actual = abbrev(list)
    a.deepEqual(actual, expect,
      'abbrev(' + util.inspect(list) + ') === ' + util.inspect(expect) + '\n' +
      'actual: ' + util.inspect(actual))

    actual = abbrev(...list)
    a.deepEqual(abbrev(...list), expect,
      'abbrev(' + list.map(JSON.stringify).join(',') + ') === ' + util.inspect(expect) + '\n' +
      'actual: ' + util.inspect(actual))
  })
}
