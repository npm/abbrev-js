# Changelog

## [4.0.0](https://github.com/npm/abbrev-js/compare/v3.0.1...v4.0.0) (2025-10-20)
### ⚠️ BREAKING CHANGES
* `abbrev` now supports node `^20.17.0 || >=22.9.0`
### Features
* [`4e4e0d0`](https://github.com/npm/abbrev-js/commit/4e4e0d0b4786c573541f77b66ae93a5ce985134d) [#110](https://github.com/npm/abbrev-js/pull/110) swap from tap to built-in node:test (@owlstronaut)
### Bug Fixes
* [`9a08f35`](https://github.com/npm/abbrev-js/commit/9a08f359c1b12d17d4631bda5211e24002a8f5be) [#110](https://github.com/npm/abbrev-js/pull/110) align to npm 11 node engine range (@owlstronaut)
### Chores
* [`3300bf3`](https://github.com/npm/abbrev-js/commit/3300bf31269b69d9e7af266f5f3252635b654446) [#110](https://github.com/npm/abbrev-js/pull/110) fix test coverage (@owlstronaut)
* [`a6230a7`](https://github.com/npm/abbrev-js/commit/a6230a706cbc25abf97b3987b2c7c483da4e3dee) [#110](https://github.com/npm/abbrev-js/pull/110) remove tap (@owlstronaut)
* [`fc814b7`](https://github.com/npm/abbrev-js/commit/fc814b7ba82c3d4e62d500491dd99956d6a759e9) [#102](https://github.com/npm/abbrev-js/pull/102) postinstall workflow updates (#102) (@owlstronaut)
* [`52f6fdd`](https://github.com/npm/abbrev-js/commit/52f6fddd479ffa97ec4b281859e8b7ec35b1fc08) [#109](https://github.com/npm/abbrev-js/pull/109) bump @npmcli/template-oss from 4.26.0 to 4.26.1 (#109) (@dependabot[bot], @npm-cli-bot)

## [3.0.1](https://github.com/npm/abbrev-js/compare/v3.0.0...v3.0.1) (2025-04-10)
### Bug Fixes
* [`1fcc7c9`](https://github.com/npm/abbrev-js/commit/1fcc7c9f31ac37554b162e3d532ecadf1259f35e) [#100](https://github.com/npm/abbrev-js/pull/100) abbrev works with a single string input (#100) (@owlstronaut)
### Chores
* [`7d26b01`](https://github.com/npm/abbrev-js/commit/7d26b01237bea985524e6d46f2d9e21b658788b1) [#99](https://github.com/npm/abbrev-js/pull/99) bump @npmcli/template-oss from 4.23.3 to 4.24.3 (#99) (@dependabot[bot], @npm-cli-bot)

## [3.0.0](https://github.com/npm/abbrev-js/compare/v2.0.0...v3.0.0) (2024-09-24)
### ⚠️ BREAKING CHANGES
* `abbrev` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`e2c25c1`](https://github.com/npm/abbrev-js/commit/e2c25c107a176aebb63c6586ef27077cb19bdc46) [#92](https://github.com/npm/abbrev-js/pull/92) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`9d4e497`](https://github.com/npm/abbrev-js/commit/9d4e4979085ac9ba500be5daf4a26c09e063008d) [#97](https://github.com/npm/abbrev-js/pull/97) enable auto publish (#97) (@reggi)
* [`b4c7e46`](https://github.com/npm/abbrev-js/commit/b4c7e46a9a4a415320218b7257c933c50183cb44) [#93](https://github.com/npm/abbrev-js/pull/93) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`faa9bf1`](https://github.com/npm/abbrev-js/commit/faa9bf1a17cd867a9a70b935aab578b17d2d09c7) [#92](https://github.com/npm/abbrev-js/pull/92) run template-oss-apply (@hashtagchris)
* [`ff93548`](https://github.com/npm/abbrev-js/commit/ff935484714f82c879ee6e2c50bc34fc2a8be922) [#80](https://github.com/npm/abbrev-js/pull/80) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`2369d5d`](https://github.com/npm/abbrev-js/commit/2369d5dcbd053c57b4ac37173f62cc70ad327fe8) [#95](https://github.com/npm/abbrev-js/pull/95) postinstall for dependabot template-oss PR (@hashtagchris)
* [`090138a`](https://github.com/npm/abbrev-js/commit/090138aa088aa659e60f45f6c45edc96a0c1f122) [#95](https://github.com/npm/abbrev-js/pull/95) bump @npmcli/template-oss from 4.22.0 to 4.23.3 (@dependabot[bot])

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
