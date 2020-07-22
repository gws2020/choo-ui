import {
  on,
  off,
  emit
} from './event'

import {
  push,
  pop
} from './router'

import Toast from './toast'

const methodList: {
  [key: string]: any
} = {
  on,
  off,
  emit,
  push,
  pop,
  Toast
}

export {
  on,
  off,
  emit,
  push,
  pop,
  Toast
}

export default methodList
