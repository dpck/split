import { equal } from 'zoroaster/assert'
import Context from '../context'
import split from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof split, 'function')
  },
  // async 'calls package without error'() {
  //   await split()
  // },
  // async 'gets a link to the fixture'({ FIXTURE }) {
  //   const res = await split({
  //     text: FIXTURE,
  //   })
  //   ok(res, FIXTURE)
  // },
}

export default T