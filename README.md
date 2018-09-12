# Secrage
Your storage is a secret

### What's Secrage?

Secrage is named of *secret* + *storage*. 

Secrage使用window.btoa将你的sessionStorage/localStorage编码, 以提高web存储一定的安全性和隐秘性.
并且不需要繁琐的手动JSON.stringify/JSON.parse, 验证数据是否为空等.
同时使用 encodeURIComponent 编码中文，使中文内容也可以被window.btoa编码.

通常你必须繁琐的转换对象/JSON字符串, 并且被保存的内容是明文的:

![](http://ooqymz3vm.bkt.clouddn.com/s_before.png)

现在你可以使用Secrage, 不需要繁琐的转换, 并且存储编码后的数据:

![](http://ooqymz3vm.bkt.clouddn.com/s_after.png)

Secrage 在set和get undefined/null 值时会自动转换为空字符串''


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


