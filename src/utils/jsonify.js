export function stringify (value = 'undefined') {
  return JSON.stringify(value)
}

export function parse (str) {
  return JSON.parse(str)
}
