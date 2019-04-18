import makeTestSuite from '@zoroaster/mask'
import split from '../../src'

export default makeTestSuite('test/result/split.json', {
  getResults: split,
  jsonProps: ['expected'],
})