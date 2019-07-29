import Secrage from './index'

export const localStorage = new Secrage(window.localStorage)

export const sessionStorage = new Secrage(window.sessionStorage)
