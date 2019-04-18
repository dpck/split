/* alanode example/ */
import split from '../src'

(async () => {
  const res = await split({
    text: 'example',
  })
  console.log(res)
})()