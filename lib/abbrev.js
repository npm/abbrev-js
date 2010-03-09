
// wrapped in a closure for the benefit of browser implementations.
// tests get run when included by node as the main module.
(function (exports, doTest) {

if ( typeof module === "object" && module.exports === exports ) {
  module.exports = exports = abbrev;
}
exports.abbrev = abbrev;

var sys = require("sys");

function abbrev () {
  if (Array.isArray(arguments[0]) && arguments.length === 1) {
    return abbrev.apply(this, arguments[0]);
  }
  for (var i = 0, l = arguments.length, args = []; i < l; i ++) {
    args[i] = typeof arguments[i] === "string" ? arguments[i] : String(arguments[i]);
  }

  // sort them lexicographically, so that they're next to their nearest kin
  args = args.sort(lexSort);

  // walk through each, seeing how much it has in common with the next and previous
  var abbrevs = {}, prev = "";
  for (var i = 0, l = args.length; i < l; i ++) {
    var current = args[i],
      next = args[i + 1] || "",
      nextMatches = true,
      prevMatches = true;
    if (current === next) continue;
    for (var j = 0, cl = current.length; j < cl; j ++) {
      var curChar = current.charAt(j);
      nextMatches = nextMatches && curChar === next.charAt(j);
      prevMatches = prevMatches && curChar === prev.charAt(j);
      if (nextMatches || prevMatches) continue;
      else {
        j ++;
        break;
      }
    }
    prev = current;
    if (j === cl) {
      abbrevs[current] = current;
      continue;
    }
    var a = current.substr(0, j);
    for (; j <= cl; j ++) {
      abbrevs[a] = current;
      a += current.charAt(j);
    }
  }
  return abbrevs;
}

function lexSort (a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}

if (!doTest) return;

var assert = require("assert"), sys = require("sys");

sys.puts("running tests");
var test = function (list, expect) {
  var actual = abbrev(list);
  assert.deepEqual(actual, expect,
    "abbrev("+sys.inspect(list)+") === " + sys.inspect(expect) + "\n"+
    "actual: "+sys.inspect(actual));
  actual = abbrev.apply(exports, list);
  assert.deepEqual(abbrev.apply(exports, list), expect,
    "abbrev("+list.map(JSON.stringify).join(",")+") === " + sys.inspect(expect) + "\n"+
    "actual: "+sys.inspect(actual));
};

test([ "ruby", "ruby", "rules", "rules", "rules" ],
{ rub: 'ruby'
, ruby: 'ruby'
, rul: 'rules'
, rule: 'rules'
, rules: 'rules'
});
test(["fool", "foom", "pool", "pope"],
{ fool: 'fool'
, foom: 'foom'
, poo: 'pool'
, pool: 'pool'
, pop: 'pope'
, pope: 'pope'
});
test(["a", "ab", "abc", "abcd", "abcde", "acde"],
{ a: 'a'
, ab: 'ab'
, abc: 'abc'
, abcd: 'abcd'
, abcde: 'abcde'
, ac: 'acde'
, acd: 'acde'
, acde: 'acde'
});

sys.puts("pass");

})(
  typeof exports === "undefined"
  ? (function () { return this })()
  : exports,
  typeof module === "object"
    && typeof process === "object"
    && process.mainModule === module
);
