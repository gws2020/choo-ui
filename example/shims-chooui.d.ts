import { ChooTheme } from '../src/options'
import {
  on,
  off,
  emit,
  push,
  pop,
  Toast
} from '../src/methods'

declare module 'vue/types/vue' {
  interface Vue {
    $choo: {
        name: string
        theme: ChooTheme
        Toast: typeof Toast
        on: typeof on
        off: typeof off
        emit: typeof emit
        push: typeof push
        pop: typeof pop
    }
  }
}