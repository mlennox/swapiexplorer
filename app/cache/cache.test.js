import _cache from './cache';

describe('using cache', () => {
  const Cache = new _cache()

  let fetcher_called = false
  const fetcher_success = (resolve_value, dont_register_call) => new Promise(resolve => {
    fetcher_called = dont_register_call !== true
    resolve(resolve_value)
  })

  const fetcher_fail = (dont_register_call) => new Promise((resolve, reject) => {
    fetcher_called = dont_register_call !== true
    reject()
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

  describe('if fetcher fails', () => {
    it('unknown key returns null value', async () => {
      let result = await Cache.fetch('some key', () => fetcher_fail())

      expect(result).toBe(null)
    })

    it('known key returns cached value', async () => {
      let expected_value = 'some value'
      // prime the cache
      await Cache.fetch('some key', () => fetcher_success(expected_value, true))

      let result = await Cache.fetch('some key', () => fetcher_fail())

      expect(result).toBe(expected_value)
    })
  })
})
