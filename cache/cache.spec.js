import Cache from './cache';

it('calling fetch with unknown key will run fetcher', async () => {
  const fetcher = jest.fn()
  fetcher
    .mockReturnValueOnce({ 'then': (fn) => fn() })

  await Cache.fetch('some key', fetcher)

  expect(fetcher)
    .toHaveBeenCalled()
})
