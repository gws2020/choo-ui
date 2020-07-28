<template lang="pug">
  section(
    :class="themeClass"
    @touchstart="touchstart"
    @touchend="touchend"
  )
    section(
      :class="`${frameName}-scroll-view-content`"
    )
      section(
        v-if="_events['pull-down']"
        :class="[`${frameName}-scroll-view-pull-down`, pullDown.status]"
      )
        template(
          v-if="$scopedSlots['pullDown']"
        )
          slot(
            v-bind:pullDown="pullDown"
            name="pullDown"
          )
        pullDown(
          ref="pullDown"
          v-bind="pullDown"
          v-else
        )
      slot
      | {{ observerList.pulldown }}
</template>

<script lang="ts">
import IScroll from './iscroll'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import ChooUiMixins from '../../mixins'
import pullDown from './pullDown'

export enum PullDownStatus {
  NotActive = 'NotActive',
  ToBeActivated = 'ToBeActivated',
  Actived = 'Actived',
  Execute = 'Execute',
  Notice = 'Notice',
  Done = 'Done'
}

export interface PullDown {
  status: PullDownStatus
}

interface ObserverItem {
  callback?: () => void,
  Observer?: MutationObserver,
  width?: string,
  height?: string,
}

interface Observer {
  [key: string]: ObserverItem
}

interface Page {
  count: number
  size: number
  init: boolean
  null: boolean
  next: boolean
}

@Component({
  props: {
    options() {
      return {}
    },
    x: {
      default: 0
    },
    y: {
      default: 0
    },
    count: {
      default: 1
    },
    size: {
      default: 10
    },
    initData: {
      default: false
    }
  },
  components: {
    pullDown
  }
})
export default class Icon extends ChooUiMixins {
  public name: string = 'scroll-view'
  public iscroll!: IScroll
  public options!: {}

  public x!: number
  public y!: number
  public count!: number
  public size!: number
  public initData!: boolean

  private page: Page = {
    count: this.count,
    size: this.size,
    init: this.initData,
    null: false,
    next: true
  }

  private pullDown: PullDown = {
    status: PullDownStatus.NotActive
  }

  private touch: boolean = false

  private observerList: Observer = {
    content: {
      callback: this.listenerContent
    },
    pulldown: {
      width: undefined,
      height: undefined
    },
    pullup: {
      width: undefined,
      height: undefined
    }
  }

  public mounted (): void {
    this.init()
    this.createdObserver('content', ['style'])
    this.initPullDown()
    this.initPullUp()
  }

  public updated(): void {
    this.initPullDown()
    this.initPullUp()
  }

  public destroyed(): void {
    this.destroyObserver('content')
    this.destroyObserver('pullDown')
    this.destroyObserver('pullUp')
  }

  public exePullDown(): void {
    if (
      this.pullDown.status !== PullDownStatus.ToBeActivated &&
      this.pullDown.status !== PullDownStatus.Actived
    ) {
      return
    }
    this.$nextTick(() => {
      this.$nextTick(() => {
        let height: string | number = this.observerList.pulldown.height as string
        height = parseInt(height) + 1
        this.pullDown.status = PullDownStatus.Execute
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.pullDownExecuteEvent(() => {
              let boxHeight: string | number = getComputedStyle(this.$el).getPropertyValue('height')
              let contentHeight: string | number = this.observerList.content.height as string
              boxHeight = parseInt(boxHeight)
              contentHeight = parseInt(contentHeight as string)
              if (contentHeight > boxHeight) {
                this.iscroll.scrollTo(0, 0, 300, null)
              }
            })
          })
        })
      })
    })
  }

  private init(): void {
    this.iscroll = new IScroll(this.$el, Object.assign(
      {}, 
      {
        probeType: 3,
        forceVerticalScroll: true,
        scrollbars: true,
        fadeScrollbars: true,
        shrinkScrollbars: 'scale'
      }, 
      this.options,
      {
        startX: this.x,
        starty: this.y
      }
    ))
    this.iscrollEvent()
    this.$emit('init')
  }

  private createdObserver(name: string, attr: string[]): void {
    const listKey: string = name.toLowerCase()
    const className: string = name.replace(/([A-Z])/g,"-$1").toLowerCase();
    if (!this.observerList[listKey].Observer) {
      this.observerList[listKey].Observer = this.listenerDOM(
        (this.$el.querySelector(`.${this.frameName}-scroll-view-${className}`) as Element),
        this.observerList[listKey],
        attr
      )
    }
  }

  private destroyObserver(name: string): void {
    const listKey: string = name.toLowerCase()
    const className: string = name.replace(/([A-Z])/g,"-$1").toLowerCase();
    if (!this.observerList[listKey].Observer) {
      return
    } else {
      const observer: MutationObserver = this.observerList[listKey].Observer as MutationObserver
      observer.disconnect()
      observer.takeRecords()
      delete this.observerList[listKey].Observer
    }
  }

  private iscrollEvent(): void {
    this.iscroll.on('beforeScrollStart', this.emit('beforeScrollStart'))
    this.iscroll.on('scrollCancel', this.emit('scrollCancel'))
    this.iscroll.on('scrollStart', this.emit('scrollStart'))
    this.iscroll.on('scroll', this.emit('scroll'))
    this.iscroll.on('scrollEnd', this.emit('scrollEnd'))
  }

  private emit(type: string): () => void {
    return () => {
      const { x, y } = this.iscroll
      this.$emit('update:x', x)
      this.$emit('update:y', y)
      if ((this as any)._events[type]) {
        this.$emit('scrollEnd', {x, y})
      }
    }
  }

  private initPullDown(): void {
    this.iscroll.off('scroll', this.pullDownEvent)
    if (!(this as any)._events['pull-down']) {
      this.destroyObserver('pullDown')
      return
    }
    this.createdObserver('pullDown', ['class'])
    this.iscroll.on('scroll', this.pullDownEvent)
  }

  private pullDownEvent(): void {
    let height: string | number = this.observerList.pulldown.height as string
    height = parseInt(height)
    if (
      this.touch && 
      (
        this.pullDown.status === PullDownStatus.ToBeActivated ||
        this.pullDown.status === PullDownStatus.Actived
      )
    ) {
      if (this.iscroll.y > height) {
        this.pullDown.status = PullDownStatus.Actived
        this.iscroll.beforeResetPosition = this.pullDownExecuteEvent
      } else {
        this.pullDown.status = PullDownStatus.ToBeActivated
        this.iscroll.beforeResetPosition = undefined
      }
    }
  }

  private initPullUp(): void {
    if (!(this as any)._events['pull-up']) {
      this.destroyObserver('pullUp')
      return
    }
    this.createdObserver('pullUp', ['class'])
  }

  private listenerContent(): void {
    this.iscroll.refresh()
  }

  private listenerDOM(element: Element, observerItem: ObserverItem, attr: string[]): MutationObserver {
    let MutationObserver = window.MutationObserver
    const width: string = getComputedStyle(element).getPropertyValue('width')
    const height: string = getComputedStyle(element).getPropertyValue('height')
    observerItem.width = width
    observerItem.height = height
    const observer = new MutationObserver(() => {
      const width: string = getComputedStyle(element).getPropertyValue('width')
      const height: string = getComputedStyle(element).getPropertyValue('height')
      if (observerItem.width === width && observerItem.height === height) {
        return
      }
      observerItem.width = width
      observerItem.height = height
      observerItem.callback && observerItem.callback()
    })
    observer.observe(element, { attributes: true, attributeFilter: attr, attributeOldValue: false })
    return observer
  }

  private touchstart(e: Event) {
    this.touch = true
  }

  private touchend(e: Event) {
    this.touch = false
  }

  private pullDownExecuteEvent(next?: () => void): void {
    this.pullDown.status = PullDownStatus.Execute
    this.$nextTick(() => {
      this.$nextTick(() => {
        let height: string | number = this.observerList.pulldown.height as string
        height = parseInt(height)
        let contentHeight: string | number = this.observerList.content.height as string
        contentHeight = parseInt(contentHeight)
        let boxHeight: string | number = getComputedStyle(this.$el).getPropertyValue('height')
        boxHeight = parseInt(boxHeight)
        this.iscroll.scrollTo(0, this.iscroll.y - height, 0.0001, undefined)
        if (contentHeight > boxHeight) {
          this.iscroll.scrollTo(0, 0, 300, undefined)
        }
        this.$emit('pull-down', {
          count: this.page.count,
          size: this.page.size
        }, this.pullDownNext)
        next && next()
      })
    })
  }

  private pullDownNext(
    next: boolean = true,
    size: number = 0,
    notice: {} | undefined
  ): void {
    this.page.next = next
    this.page.count += next ? 1 : 0
    this.page.init = true
    if (this.page.count === this.count && size === 0) {
      this.page.null = true
    } else {
      this.page.null = false
    }

    this.iscroll.beforeResetPosition = () => {
      console.log('=======333333')
    }

    if (notice) {
      this.pullDown.status = PullDownStatus.Notice
    } else {
      this.pullDown.status = PullDownStatus.Done
    }

    this.$nextTick(() => {
      this.$nextTick(() => {
        this.iscroll.scrollTo(0, 0.0001, 300, undefined)
      })
    })
  }

}
</script>