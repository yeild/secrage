# Secrage

> Secrage is named of *secret* + *storage*, a wrapper of native localStorage/sessionStorage with only 2kb.

Secrage会自动调用JSON.stringify/JSON.parse转换对象与JSON字符串, 省去手动转换的麻烦, 然后使用window.btoa将你的数key/value编码后存入localStorage/sessionStorage, 使数据更加隐蔽. 
同时会将null/undefined转换为空字符串, 并使用encodeURIComponent编码中文, 使中文内容也可以被window.btoa编码.

****

通常你必须手动调用JSON.stringify/JSON.parse, 并且被保存的内容是明文的:

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312164356439-2083261358.png)

现在你可以使用Secrage省去这些麻烦, 并且存储编码后的数据:

![](https://img2018.cnblogs.com/blog/1150501/201903/1150501-20190312164358480-252980411.png)

### Usage

npm: 
```
$ npm i secrage -S
...
import { sessionStorage } from 'secrage'
sessionStorage.setItem('foo', 'bar')
```

or \<script>: [download](https://raw.githubusercontent.com/yeild/secrage/master/dist/secrage.min.js)
```
<script src="[path]/secrage.min.js"></script>

var storage = Secrage.sessionStorage
// or
// var storage = Secrage.localStorage
storage.setItem('foo', 'bar')

```

### Notice
+ storage.setItem(key, value) 时, 你不能也不应该将你的key设为中文.
+ 使用window.btoa进行转码, 如果浏览器不支持, 会直接存取未转码的内容.


