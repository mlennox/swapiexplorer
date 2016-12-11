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
    this.memcache[key] = value
    return value
  }

  reset() {
    this.memcache = {}
  }
}

export default new Cacher()