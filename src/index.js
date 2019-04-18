/**
 * Splits the package name possibly with scope and returns the name and the
 * path within that page that was required.
 * @param {string} from The package, e.g., `@depack/depack/src`, or `depack`.
 */
const split = (from) => {
  let [scope, name, ...paths] = from.split('/')
  if (!scope.startsWith('@') && name) {
    paths = [name, ...paths]
    name = scope
  } else if (!scope.startsWith('@')) {
    name = scope
  } else {
    name = `${scope}/${name}`
  }
  return { name, paths: paths.join('/') }
}

export default split