# Secrage

> Secrage is named of *secret* + *storage*, witch is a wrapper of native localStorage/sessionStorage with only 2kb.

Usually when you using webStorage, you have to invoke JSON.stringify/JSON.parse to transform your object data, and the data is showing as **Plaintext**:

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312164356439-2083261358.png)

Now you can use Secrage without those bother, and the data will be ciphered(or to say 'encoded', exactly):

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312164358480-252980411.png)

### How does it work

Secrage will transcode data by 3 steps:
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

The *window.encodeURIComponent* is used in case of the string to be encoded by window.btoa contains characters outside of the Latin1 range.

When invoking storage.get(key), these steps are reverse.

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

You can try it out at [this page](https://yeild.github.io/secrage/demo.html) first.

### Notice
+ The behavor of *strinify* is same as JSON.strinify. For example *function* and *undefined* value will be omitted. [See more infomation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description)
+ If your browser doesn't support window.btoa, its step has no effect.



