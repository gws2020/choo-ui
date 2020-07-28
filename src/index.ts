import Vue, { PluginObject, PluginFunction } from 'vue'
import VueRouter from 'vue-router'
import Options, { ChooTheme } from './options'
import Component from './component'
import methods from './methods'

export interface InitOptions {
  router: VueRouter
  theme: ChooTheme
  method?: any
}

class ChooUI implements PluginObject<InitOptions> {

  public router!: VueRouter

  private example: Options = new Options()

  private name: string = 'choo'
  private theme: ChooTheme = {
    checked: 'default',
    map: {}
  }

  public constructor () {
    const { name, theme } = this
    this.example.options = {
      name,
      theme
    }
  }

  public install: PluginFunction<InitOptions> = (
    vue: typeof Vue,
    options?: InitOptions
  ): void => {

    if (!options) {
      throw(new Error('router 为必要参数'))
    }

    const router: VueRouter = options!.router

    if (!router) {
      throw(new Error('router 为必要参数'))
    }
    if (!(router instanceof VueRouter)) {
      throw(new Error('router 必须为 VueRouter 实例'))
    }
    this.router = options!.router

    if (options && options.theme) {
      this.theme.checked = options.theme.checked || 'default'
      Object.assign(this.theme.map, options.theme.map || {})
    }

    Object.defineProperty(vue.prototype, '$choo', {
      get: () => {
        return {
          ...this.example.options,
          ...methods
        }
      }
    })

    Object.keys(Component).forEach((componentName: string) => {
      const components: typeof Vue = Component[componentName]
      componentName = componentName.replace(/([A-Z])/g, '-$1').toLowerCase();
      vue.component(`${this.name}-${componentName}`, components)
    })
  }
}

const example: ChooUI = new ChooUI()

export const component = Component

export default example
