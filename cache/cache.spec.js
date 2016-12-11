import Cache from './cache';

const successful = (resolve_value) => new Promise(resolve => resolve(resolve_value))

afterEach(() => {
  Cache.reset()
})

it('calling fetch with unknown key will run fetcher', async () => {
  let fetch_mock = () => {
    return new Promise((resolve,reject) => {
      resolve()
    })
  }

  const fetcher = jest.fn(fetch_mock)

  await Cache.fetch('some key', fetcher)

  expect(fetcher)
    .toHaveBeenCalled()
})

it('calling fetch with known key will not run fetcher', async () => {

  // we will prime the cache with our value
  await Cache.fetch('some key', () => successful('some value'))


  let fetch_mock = () => successful('some other value')

  const fetcher = jest.fn(fetch_mock)

  let result = await Cache.fetch('some key', fetcher)

  expect(fetcher)
    .not.toHaveBeenCalled()

  expect(result)
    .toBe('some value')
})
