import ChooUiMixins from '../mixins/index'
import { createDOM } from '../utils'


export default abstract class NoBaseMixins extends ChooUiMixins {
  public abstract name: string
  public DOM!: HTMLElement

  public constructor(opt: any, tag: string = 'section') {
    super(opt)
    this.createDOM(tag)
  }

  protected destroyed () {
    const el: Element = this.$el
    const parent: Element | null = el.parentElement
    if (parent !== null) {
      parent.removeChild(el)
    }
  }

  private createDOM(tag: string): void {
    this.DOM = new createDOM(tag).DOM
  }
}
