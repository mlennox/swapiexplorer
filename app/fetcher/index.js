export const fetcher = (url, options = { method: 'get' }, result_parser = (response) => response.results) => {
  return fetch(url, options)
    .then((response) => {
      return result_parser(response)
    })
    .catch((err) => console.log('error fetching from : ', url, err))
}