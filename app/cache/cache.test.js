import Cache from './cache';
import test from 'ava';

test.beforeEach(t => {
  t.context.Cache = new Cache();
  t.context.fetcher_called = false;
  t.context.create_fetcher = (will_resolve, process, success_value) => {
    return () => new Promise((resolve, reject) => {
      if (process){
        process()
      } else {
        t.context.fetcher_called = true
      }
      if (will_resolve){
        resolve(success_value || 'success')
      } else {
        reject()
      }
    })
  }
})


test('calling fetch with unknown key will run fetcher', async t => {
  let fetcher = t.context.create_fetcher(true)
  await t.context.Cache.fetch('some key', fetcher)
  t.is(true, t.context.fetcher_called)
})

test('calling fetch with known key will NOT run fetcher', async t => {
  let cache_primer = t.context.create_fetcher(true, () => { /* only here to stop fetcher_called from being set true */ })
  let fetcher_stub = t.context.create_fetcher(true)

  let known_key = 'some key'
  // prime cache
  await t.context.Cache.fetch(known_key, cache_primer)
  // fetch from cache
  await t.context.Cache.fetch(known_key, fetcher_stub)
  t.is(false, t.context.fetcher_called)
})


test('if fetcher fails unknown key returns null', async t => {
  let fetcher_stub = t.context.create_fetcher(false)
  let unknown_key = 'some key'
  // fetch from cache
  let result = await t.context.Cache.fetch(unknown_key, fetcher_stub)

  t.is(null, result)
})





// import _cache from './cache';
//
// describe('using cache', () => {
//   const Cache = new _cache()
//
//   let fetcher_called = false
//   const fetcher_success = (resolve_value, dont_register_call) => new Promise(resolve => {
//     fetcher_called = dont_register_call !== true
//     resolve(resolve_value)
//   })
//
//   const fetcher_fail = (dont_register_call) => new Promise((resolve, reject) => {
//     fetcher_called = dont_register_call !== true
//     reject()
//   })
//
//   afterEach(() => {
//     fetcher_called = false
//     Cache.reset()
//   })
//
//   describe('calling fetch with', () => {
//     it('unknown key will run fetcher', async () => {
//       let fetcher = () => fetcher_success()
//
//       await Cache.fetch('some key', fetcher)
//
//       expect(fetcher_called).toBe(true)
//     })
//
//     it('known key will not run fetcher', async () => {
//       await Cache.fetch('some key', () => fetcher_success('some value', true))
//
//       let fetcher = () => fetcher_success('some other value')
//
//       await Cache.fetch('some key', fetcher)
//
//       expect(fetcher_called)
//         .toBe(false)
//     })
//   })
//
//   describe('if fetcher fails', () => {
//     it('unknown key returns null value', async () => {
//       let result = await Cache.fetch('some key', () => fetcher_fail())
//
//       expect(result).toBe(null)
//     })
//
//     it('known key returns cached value', async () => {
//       let expected_value = 'some value'
//       // prime the cache
//       await Cache.fetch('some key', () => fetcher_success(expected_value, true))
//
//       let result = await Cache.fetch('some key', () => fetcher_fail())
//
//       expect(result).toBe(expected_value)
//     })
//   })
// })
