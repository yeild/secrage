import { atob, btoa, encode, decode } from './utils/transcoding'
import { parse, stringify } from './utils/jsonify'

export default class Secrage {
  constructor (storage) {
    this.storage = storage
  }

  setItem (key, value) {
    this.storage.setItem(
      btoa(encode(key)),
      btoa( // step3. btoa
        encode( // step2. encodeURIComponent
          stringify(value) // step1. JSON.stringify
        )
      )
    )
  }

  getItem (key) {
    return parse( // step3. JSON.parse
      decode( // step2. decodeURIComponent
        atob( // step1. atob
          this.storage.getItem(btoa(encode(key)))
        )
      )
    )
  }

  removeItem (key) {
    this.storage.removeItem(btoa(key))
  }

  clear () {
    this.storage.clear()
  }
}
