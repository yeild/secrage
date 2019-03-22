import { atob, btoa, encode, decode } from './utils/transcoding'
import { parse, stringify } from './utils/jsonify'

export default class Secrage {
  constructor (storage) {
    this.storage = storage
  }

  setItem (key, value) {
    this.storage.setItem(
      btoa(key),
      btoa( // step3. btoa
        encode( // step2. encode
          stringify(value) // step1. stringify
        )
      )
    )
  }

  getItem (key) {
    return parse( // step3. parse
      decode( // step2. decode
        atob( // step1. atob
          this.storage.getItem(
            btoa(key) // transcode key
          )
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
