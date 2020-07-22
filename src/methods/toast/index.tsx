import { Component } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import { VNode } from 'vue/types/vnode'
import NoBaseMixins from '../../mixins/noBaseMixins'
import basicTips from '../../component/basic-tips'

@Component({
  components: {
    basicTips
  }
})
class CreateToast extends NoBaseMixins {
  public name: string = 'toast'
  public message: string = 'null'
  public duration: number = 3000
  private show: boolean = false

  public constructor(opt: any) {
    super(opt)
  }

  public mounted() {
    this.show = true
  }

  public render (h: CreateElement): VNode {
    const {
      themeClass,
      message,
      show,
      animateEnter,
      animateLeave
    } = this

    const transitionName: string = `${themeClass[0]}-animate`

    let toast!: VNode
    if (show) {
      toast = (
        <transition name={transitionName} on-afterEnter={animateEnter} on-afterLeave={animateLeave}>
          <section class={themeClass}>
            <basic-tips domPropsInnerHTML={message}></basic-tips>
          </section>
        </transition>
      )
    } else {
      toast = (
        <transition name={transitionName}></transition>
      )
    }
    return toast
  }

  protected destroyed() {
    super.destroyed()
  }

  private animateEnter() {
    setTimeout(() => {
      this.show = false
      this.$nextTick(() => {
        if (this.$el.innerHTML === undefined) {
          this.$destroy()
        }
      })
    }, this.duration)
  }

  private animateLeave() {
    this.$destroy()
  }
}

class Toast {
  public message!: string
  public duration!: number
  constructor (opt: any) {
    const example: CreateToast = new CreateToast({
      data () {
        return opt
      }
    })
    this.message = example.message
    this.duration = example.duration
    example.$mount(example.DOM)
  }
}

export interface ToastOptions {
  message?: string
  duration?: number
}

export default (opt: ToastOptions = {}): Toast => {
  return new Toast(opt)
}
