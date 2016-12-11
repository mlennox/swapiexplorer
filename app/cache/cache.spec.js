import Cache from './cache';

const successful = (resolve_value) => new Promise(resolve => resolve(resolve_value))

afterEach(() => {
  Cache.reset()
})

it('calling fetch with unknown key will run fetcher', async () => {
  let fetcher_called = false

  let fetcher = () => new Promise(resolve => {
      fetcher_called = true
      resolve()
    })

  await Cache.fetch('some key', fetcher)

  expect(fetcher_called).toBe(true)
})

it('calling fetch with known key will not run fetcher', async () => {
  let fetcher_called = false

  // we will prime the cache with our value
  await Cache.fetch('some key', () => successful('some value'))

  let fetcher = () => new Promise(resolve => {
    fetcher_called = true
    resolve()
  })

  await Cache.fetch('some key', fetcher)

  expect(fetcher_called)
    .toBe(false)
})
