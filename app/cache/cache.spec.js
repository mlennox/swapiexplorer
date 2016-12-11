import _cache from './cache';

describe('using cache', () => {
  const Cache = new _cache()

  let fetcher_called = false
  const fetcher_success = (resolve_value, dont_register_call) => new Promise(resolve => {
    fetcher_called = dont_register_call !== true
    resolve(resolve_value)
  })

  afterEach(() => {
    fetcher_called = false
    Cache.reset()
  })

  describe('calling fetch with', () => {
    it('unknown key will run fetcher', async () => {
      let fetcher = () => fetcher_success()

      await Cache.fetch('some key', fetcher)

      expect(fetcher_called).toBe(true)
    })

    it('known key will not run fetcher', async () => {
      await Cache.fetch('some key', () => fetcher_success('some value', true))

      let fetcher = () => fetcher_success('some other value')

      await Cache.fetch('some key', fetcher)

      expect(fetcher_called)
        .toBe(false)
    })
  })

  describe('fetcher error', () => {
    it('sets value to null', () => {

    })
  })
})
