import Secrage from './index'

window.Secrage = {
  localStorage: new Secrage(window.localStorage),
  sessionStorage: new Secrage(window.sessionStorage)
}
