import { JSDOM } from 'jsdom'
import { atob, decode, stringify } from "../src/utils/transcoding"
import Secrage from '../src/index.js'

const window = new JSDOM('', { url: "http://localhost" }).window
const storage = new Secrage(window.localStorage)

test('empty string', function () {
  const data = ''
  storage.setItem('data', data)
  expect(storage.getItem('data')).toBe(data)
  storage.clear()
})

test('simple string', function () {
  const data = 'hello world'
  storage.setItem('data', data)
  expect(storage.getItem('data')).toBe(data)
  storage.clear()
})

test('zh-CN string', function () {
  const data = '你好，世界'
  storage.setItem('data', data)
  expect(storage.getItem('data')).toBe(data)
  storage.clear()
})

test('number', function () {
  const data = 0
  storage.setItem('data', data)
  expect(storage.getItem('data')).toBe(data)
  storage.clear()
})

test('undefined', function () {
  const data = undefined
  storage.setItem('undefined', data)
  expect(storage.getItem('undefined')).toBe('undefined')
  storage.clear()
})

test('null', function () {
  const data = null
  storage.setItem('null', data)
  expect(storage.getItem('null')).toBe(data)
  storage.clear()
})

test('empty object', function () {
  const data = {}
  storage.setItem('object', data)
  expect(storage.getItem('object')).toEqual(data)
  storage.clear()
})

test('empty array', function () {
  const data = []
  storage.setItem('array', data)
  expect(storage.getItem('array')).toEqual(data)
  storage.clear()
})

test('complex object', function () {
  const data = {
    a: 1,
    b: '2',
    c: false,
    d: null,
    e: undefined,
    f: Symbol(),
    g: function () {},
    h: [],
    i: {},
    j: [1, '2', null, undefined, false, {}, function () {}, '你好'],
    k: { a: 1, b: '2', c: null, d: undefined, e: false, f: [], g: '你好'}
  }
  storage.setItem('data', data)
  window.sessionStorage.setItem('data', JSON.stringify(data))
  expect(storage.getItem('data')).toEqual(JSON.parse(window.sessionStorage.getItem('data')))
  storage.clear()
  window.sessionStorage.clear()
})

test(`encode data's performance in console`, function () {
  const data = {
    a: 1,
    b: '你好，世界',
    c: ['some', 'item']
  }
  storage.setItem('data', data)
  expect(Object.keys(window.localStorage)[0]).toBe('ZGF0YQ==')
  expect(window.localStorage['ZGF0YQ==']).toBe('JTdCJTIyYSUyMiUzQTElMkMlMjJiJTIyJTNBJTIyJUU0JUJEJUEwJUU1JUE1JUJEJUVGJUJDJThDJUU0JUI4JTk2JUU3JTk1JThDJTIyJTJDJTIyYyUyMiUzQSU1QiUyMnNvbWUlMjIlMkMlMjJpdGVtJTIyJTVEJTdE')
  storage.clear()
})

test('undefined as key', function () {
  const data = 'some text'
  storage.setItem(undefined, data)
  const key = decode(atob(Object.keys(window.localStorage)[0]))
  expect(key).toBe('undefined')
  expect(storage.getItem(undefined)).toBe(data)
  storage.clear()
})

test('null as key', function () {
  const data = 'some text'
  storage.setItem(null, data)
  const key = decode(atob(Object.keys(window.localStorage)[0]))
  expect(key).toBe('null')
  expect(storage.getItem(null)).toBe(data)
  storage.clear()
})

test('object as key', function () {
  const data = 'some text'
  storage.setItem({}, data)
  const key = decode(atob(Object.keys(window.localStorage)[0]))
  expect(key).toBe('[object Object]')
  expect(storage.getItem({})).toBe(data)
  storage.clear()
})

test('array as key', function () {
  const data = 'some text'
  storage.setItem([1, undefined, null], data)
  const key = decode(atob(Object.keys(window.localStorage)[0]))
  expect(key).toBe('1,,')
  expect(storage.getItem([1, undefined, null])).toBe(data)
  storage.clear()
})

test('function as key', function () {
  const data = 'some text'
  storage.setItem(function (a) { return a }, data)
  const key = decode(atob(Object.keys(window.localStorage)[0]))
  expect(key).toBe((function (a) { return a }).toString())
  expect(storage.getItem(function (a) { return a })).toBe(data)
  storage.clear()
})

test('non-Latin as key', function () {
  const data = '世界'
  storage.setItem('你好', data)
  const key = decode(atob(Object.keys(window.localStorage)[0]))
  expect(key).toBe('你好')
  expect(storage.getItem('你好')).toBe(data)
  storage.clear()
})

test('storage.getItem(key) should return null if the key does not exist', function () {
  storage.clear()
  expect(storage.getItem('data')).toBe(null)
})
