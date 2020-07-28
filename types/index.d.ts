import { InitOptions } from '../src/index'
import { PluginFunction } from 'vue'
import component from './component'
import './vue'

declare namespace ChooUI {
  const install: PluginFunction<InitOptions>
}

export {
  component
}

export default ChooUI
