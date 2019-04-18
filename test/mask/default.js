import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import split from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await split({
      text: input,
    })
    return res
  },
  context: Context,
})