class Cacher {
  constructor() {
    this.reset()
  }

  fetch(key, fetcher) {
    if (key in this.memcache) {
      return this.memcache[key]
    }

    let value = fetcher()
      .then(result => result)
      .catch(() => {
        // some logging?
        return null
      })
    this.memcache[key] = value
    return value
  }

  reset() {
    this.memcache = {}
  }
}

export default Cacher