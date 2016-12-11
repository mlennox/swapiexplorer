class Cacher {
  constructor() {
    this.memcache = {}
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
}

export default new Cacher()