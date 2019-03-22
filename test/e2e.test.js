import { JSDOM } from 'jsdom'
import Secrage from '../src/index.js'

const window = new JSDOM('', { url: "http://localhost" }).window
const localStorage = new Secrage(window.localStorage)

test('empty string', function () {
  localStorage.clear()
  const data = ''
  localStorage.setItem('data', data)
  expect(localStorage.getItem('data')).toBe(data)
})

test('simple string', function () {
  localStorage.clear()
  const data = 'hello world'
  localStorage.setItem('data', data)
  expect(localStorage.getItem('data')).toBe(data)
})

test('zh-CN string', function () {
  localStorage.clear()
  const data = '你好，世界'
  localStorage.setItem('data', data)
  expect(localStorage.getItem('data')).toBe(data)
})

test('number', function () {
  localStorage.clear()
  const data = 0
  localStorage.setItem('data', data)
  expect(localStorage.getItem('data')).toBe(data)
})

test('null', function () {
  localStorage.clear()
  const data = null
  localStorage.setItem('null', data)
  expect(localStorage.getItem('null')).toBe(data)
})

test('undefined', function () {
  localStorage.clear()
  const data = undefined
  localStorage.setItem('undefined', data)
  expect(localStorage.getItem('undefined')).toBe('undefined')
})

test('empty object', function () {
  localStorage.clear()
  const data = {}
  localStorage.setItem('object', data)
  expect(localStorage.getItem('object')).toEqual(data)
})

test('empty array', function () {
  localStorage.clear()
  const data = []
  localStorage.setItem('array', data)
  expect(localStorage.getItem('array')).toEqual(data)
})

test('undefined as key', function () {
  localStorage.clear()
  const data = 'some text'
  localStorage.setItem(undefined, data)
  expect(localStorage.getItem(undefined)).toBe(data)
})

test('null as key', function () {
  localStorage.clear()
  const data = 'some text'
  localStorage.setItem(null, data)
  expect(localStorage.getItem(null)).toBe(data)
})

test('complex object', function () {
  localStorage.clear()
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
  localStorage.setItem('array', data)
  expect(localStorage.getItem('array')).toEqual(JSON.parse(JSON.stringify(data)))
})

test(`encode data's performance in console`, function () {
  localStorage.clear()
  const data = {
    a: 1,
    b: '你好，世界',
    c: ['some', 'item']
  }
  localStorage.setItem('data', data)
  expect(Object.keys(window.localStorage)[0]).toBe('ZGF0YQ==')
  expect(window.localStorage['ZGF0YQ==']).toBe('JTdCJTIyYSUyMiUzQTElMkMlMjJiJTIyJTNBJTIyJUU0JUJEJUEwJUU1JUE1JUJEJUVGJUJDJThDJUU0JUI4JTk2JUU3JTk1JThDJTIyJTJDJTIyYyUyMiUzQSU1QiUyMnNvbWUlMjIlMkMlMjJpdGVtJTIyJTVEJTdE')
})
