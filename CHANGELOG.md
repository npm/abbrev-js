# Changelog

## [2.0.1](https://github.com/npm/abbrev-js/compare/v2.0.0...v2.0.1) (2024-04-21)

### Chores

* [`41ab239`](https://github.com/npm/abbrev-js/commit/41ab23977390ee219cdf9c861f985187ca5479ce) [#79](https://github.com/npm/abbrev-js/pull/79) postinstall for dependabot template-oss PR (@lukekarrys)
* [`ed52aa2`](https://github.com/npm/abbrev-js/commit/ed52aa2bf457fe2f0ebbb13c8cde556821900ebd) [#79](https://github.com/npm/abbrev-js/pull/79) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [2.0.0](https://github.com/npm/abbrev-js/compare/v1.1.1...v2.0.0) (2022-10-31)

### ⚠️ BREAKING CHANGES

* Refactored with the following breaking changes:
    - `abbrev` is now compatible with the following semver range for node:
    `^14.17.0 || ^16.13.0 || >=18.0.0`
    - `monkeyPatch` API has been removed

### Features

* [`602c0fe`](https://github.com/npm/abbrev-js/commit/602c0feb27f370588b3659781f8f1d52b80df3a7) add @npmcli/template-oss (#36) (@lukekarrys)

### Bug Fixes

* [`b658525`](https://github.com/npm/abbrev-js/commit/b658525ebcddbe4dc8c672a48ec6012299e5791d) replace deprecated String.prototype.substr() (#38) (@CommanderRoot)
