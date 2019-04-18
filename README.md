# @depack/split

[![npm version](https://badge.fury.io/js/%40depack%2Fsplit.svg)](https://npmjs.org/package/@depack/split)

`@depack/split` Splits The Package Name To Return The Name With Scope And Paths.

```sh
yarn add -E @depack/split
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`split(name: string): { name: string, paths: string }`](#splitname-string--name-string-paths-string-)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import split from '@depack/split'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `split(`<br/>&nbsp;&nbsp;`name: string,`<br/>`): { name: string, paths: string }`

Returns the name and paths for the given package string that can have a scope and the paths after the package name.

```js
/* alanode example/ */
import split from '@depack/split'

console.log(split('package-name'))
console.log(split('package-name/src/index.js'))
console.log(split('@scope/package-name'))
console.log(split('@scope/package-name/src/index.js'))
```
```js
{ name: 'package-name', paths: '' }
{ name: 'package-name', paths: 'src/index.js' }
{ name: '@scope/package-name', paths: '' }
{ name: '@scope/package-name', paths: 'src/index.js' }
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>