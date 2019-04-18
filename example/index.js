/* alanode example/ */
import split from '../src'

console.log(split('package-name'))
console.log(split('package-name/src/index.js'))
console.log(split('@scope/package-name'))
console.log(split('@scope/package-name/src/index.js'))