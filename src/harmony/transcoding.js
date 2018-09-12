export function atob (str) {
  if (!str) return ''
  return window.atob ? window.atob(str) : str
}

export function btoa (str) {
  if (!str) return ''
  return window.btoa ? window.btoa(str) : str
}

export function encode (str) {
  if (!str) return ''
  return window.encodeURIComponent(str)
}

export function decode (str) {
  if (!str) return ''
  return window.decodeURIComponent(str)
}