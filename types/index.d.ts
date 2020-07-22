import { InitOptions } from '../src/index'
import { PluginFunction } from 'vue'
import './vue'

declare namespace ChooUI {
  const install: PluginFunction<InitOptions>
}

export default ChooUI
