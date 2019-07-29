import { stringify, parse } from '../src/utils/jsonify'
import { btoa, atob, encode, decode } from '../src/utils/transcoding'

test('stringify(undefined) should be "undefined"', function () {
  expect(stringify(undefined)).toBe('"undefined"')
})

test(`parse('"undefined"') should be "undefined"`, function () {
  expect(parse('"undefined"')).toBe('undefined')
})

test('btoa("hello world") should be "aGVsbG8gd29ybGQ="', function () {
  expect(btoa('hello world')).toBe('aGVsbG8gd29ybGQ=')
})

test('btoa fallback should return a string', function () {
  const temp = window.btoa
  window.btoa = undefined
  expect(btoa('hello world')).toBe('hello world')
  expect(btoa({})).toBe('[object Object]')
  expect(btoa([1, undefined, null])).toBe('1,,')
  expect(btoa(function (a) { return a })).toBe((function (a) { return a }).toString())
  window.btoa = temp
})

test('atob("aGVsbG8gd29ybGQ=") should be "aGVsbG8gd29ybGQ="', function () {
  expect(atob('aGVsbG8gd29ybGQ=')).toBe('hello world')
})

test('encode("你好，世界") should be "%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C"', function () {
  expect(encode('你好，世界')).toBe('%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C')
})

test('decode("%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C") should be "你好，世界"', function () {
  expect(decode('%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C')).toBe('你好，世界')
})

test('decode("%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C") should be "你好，世界"', function () {
  expect(decode('%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C')).toBe('你好，世界')
})

test('encode non-string', function () {
  expect(encode(null)).toBe(encode('null'))
  expect(encode(undefined)).toBe(encode('undefined'))
  expect(encode({})).toBe(encode('[object Object]'))
  expect(encode([1, undefined, null])).toBe(encode('1,,'))
  expect(encode(function (a) { return a })).toBe(encode((function (a) { return a }).toString()))
})
