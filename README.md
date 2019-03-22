# Secrage

> Secrage is named of *secret* + *storage*, a wrapper of native localStorage/sessionStorage with only 2kb.

****

Usually when you using webStorage, you have to use *JSON.stringify*/*JSON.parse* to stringify and parse your object data, and the data is showing as **Plaintext**:

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312164356439-2083261358.png)

Now you can use Secrage to avoid those bother, and the data will be ciphered(or to say 'encoded', exactly):

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312164358480-252980411.png)

### How?

Secrage will transcode your data by three steps:
```
storage.setItem(
  btoa(key),
  btoa( // step3. btoa
    encode( // step2. encodeURIComponent
      stringify(data) // step1. JSON.stringify
    )
  )
)
```
First use JSON.stringify to jsonify the raw data.
Then use window.encodeURIComponent, in case of the string to be encoded by window.btoa contains characters outside of the Latin1 range.
Finally, use window.btoa to 'ciphere' the string.
The *key* to set to webStorage will be encoded too.

when invoking storage.get(key), these steps are reverse.

### Usage

npm: 
```
$ npm i secrage -S
...
import { sessionStorage } from 'secrage'
sessionStorage.setItem('foo', 'bar')
```

or html script: [download](https://raw.githubusercontent.com/yeild/secrage/master/dist/secrage.min.js)
```
<script src="[path]/secrage.min.js"></script>

var storage = Secrage.sessionStorage
// or
// var storage = Secrage.localStorage
storage.setItem('foo', 'bar')

```

### Notice
+ The encoding behavor is same as JSON.strinify, like *function* and *undefined* value will be omitted. More infomation, see [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description)
+ Non-latin1 characters like Zh-CN can be encoded as well.
+ if your browser doesn't support window.btoa, this step has no effect.



