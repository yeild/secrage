export function parse (str = '') {
  if (str === '') return ''
  return JSON.parse(str)
}

export function stringify (value = '') {
  if (value === null) return ''
  return JSON.stringify(value)
}
