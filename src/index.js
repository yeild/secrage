import { atob, btoa, encode, decode } from './harmony/transcoding'
import { parse, stringify } from './harmony/jsonify'
class Secrage {
  constructor (storage) {
    this.storage = storage
  }

  setItem (key, value) {
    this.storage.setItem(
      btoa(key),
      btoa( // step3.加密
        encode( // step2.编码中文
          stringify(value) // step1.转json
        )
      )
    )
  }

  getItem (key) {
    return parse( // step3. 解析json
      decode( // step2. 解码中文
        atob( // step1. 解密
          this.storage.getItem(btoa(key))
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

export const sessionStorage = new Secrage(window.sessionStorage)
export const localStorage = new Secrage(window.localStorage)
