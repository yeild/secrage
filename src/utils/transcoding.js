export function atob (str) {
  return window.atob ? window.atob(str) : str
}

export function btoa (str) {
  return window.btoa ? window.btoa(str) : str
}

export function encode (str) {
  return window.encodeURIComponent(str)
}

export function decode (str) {
  return window.decodeURIComponent(str)
}
