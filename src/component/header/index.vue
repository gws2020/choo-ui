<template lang="pug">
  section(
    :class="themeClass"
  )
    ul(
      v-if="btnMap.left.length"
      :class="`${frameName}-header-btn`"
    )
      template(
        v-for="(icon, index) in btnMap.left"
      )
        li(
          :key="icon ? icon.name : `left_${index}`"
          @click="icon && btnEvent($event, icon.event)"
        )
          choo-icon(
            v-if="icon && icon.font"
            :type="icon.font.type"
            :code="icon.font.code"
          )
          img(
            v-else-if="icon && icon.src"
            :src="icon.src"
          )
          p(
            v-if="icon.text"
          ) {{ icon.text }}
    div(
      :class="`${frameName}-header-content`"
    )
      slot
    ul(
      v-if="btnMap.right.length"
      :class="`${frameName}-header-btn`"
    )
      template(
        v-for="(icon, index) in btnMap.right"
      )
        li(
          :key="icon ? icon.name : `right_${index}`"
        )
          choo-icon(
            v-if="icon && icon.font"
            :type="icon.font.type"
            :code="icon.font.code"
          )
          img(
            v-else-if="icon && icon.src"
            :src="icon.src"
          )
          p(
            v-if="icon && icon.text"
          ) {{ icon.text }}
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import Page from '../page'
import ChooUiMixins from '../../mixins'

interface HeaderBtn {
  event: string
  name: string
  text?: string
  font?: {
    type?: string,
    code: string
  },
  url?: string
}

interface BtnMap {
  left: Array<HeaderBtn | undefined>
  right: Array<HeaderBtn | undefined>
}

type unWatch = (() => void)

@Component
export default class Header extends ChooUiMixins {

  public static defaultBack: HeaderBtn = {
    name: 'back',
    event: 'chooPageBack',
    font: {
      type: 'chooui',
      code: 'choo-left'
    }
  }

  public name: string = 'header'
  public $parent!: Page
  @Prop({
    default: true
  })
  public back!: boolean

  @Prop({
    default: false
  })
  public spaceEquality!: boolean

  private btnMap: BtnMap = {
    left: [
      Header.defaultBack
    ],
    right: []
  }

  private isRootHeader: boolean = this.$parent.isRootPage
  private btnUnWatch?: unWatch

  public created() {
    if (this.isRootHeader && !this.back) {
      this.btnMap.left.splice(0, 1)
    }
  }

  public mounted() {
    this.initEvent()
  }

  public destroyed () {
    this.removeEvent()
  }

  private initEvent() {
    if(this.isRootHeader) {
      this.$choo.on('chooAddHeaderRightBtn', this.addRightBtnEvent)
      this.$choo.on('chooAddHeaderLeftBtn', this.addLeftBtnEvent)
      this.$choo.on('chooRemoveHeaderRightBtn', this.removeRightBtnEvent)
      this.$choo.on('chooRemoveHeaderLeftBtn', this.removeLeftBtnEvent)
      this.btnUnWatch = this.$watch('btnMap', this.btnWatch, {
        deep: true,
        immediate: true
      })
    }
  }

  private btnWatch(val: BtnMap, old: BtnMap) {
    let { left, right } = val

    if (left.length > 2) {
      left.splice(2, 1)
    }

    if (right.length > 2) {
      right.splice(2, 1)
    }

    if (this.spaceEquality) {
      if (left.length > right.length) {
        right.splice(right.length, 0, ...(new Array(left.length - right.length)))
      } else if (right.length < left.length) {
        left.splice(left.length, 0, ...(new Array(right.length - left.length)))
      }

      if (left.length !== right.length) {
        if (left.indexOf(undefined) !== -1) {
          val.left = left.filter(i => i !== undefined)
        }
        if (right.indexOf(undefined) !== -1) {
          val.right = right.filter(i => i !== undefined)
        }
      }
    } else {
      if (left.indexOf(undefined) !== -1) {
        val.left = left.filter(i => i !== undefined)
      }
      if (right.indexOf(undefined) !== -1) {
        val.right = right.filter(i => i !== undefined)
      }
    }
  }

  private removeEvent() {
    if(this.isRootHeader) {
      (this.btnUnWatch as unWatch)()
      this.$choo.off('chooAddHeaderRightBtn', this.addRightBtnEvent)
      this.$choo.off('chooAddHeaderLeftBtn', this.addLeftBtnEvent)
      this.$choo.off('chooRemoveHeaderRightBtn', this.removeRightBtnEvent)
      this.$choo.off('chooRemoveHeaderLeftBtn', this.removeLeftBtnEvent)
    }
  }

  private addRightBtnEvent(event: Event) {
    const detail: HeaderBtn = (event as CustomEvent).detail
    this.btnMap.right.push(detail)
  }

  private addLeftBtnEvent(event: Event) {
    const detail: HeaderBtn = (event as CustomEvent).detail
    this.btnMap.left.push(detail)
  }

  private removeRightBtnEvent(event: Event) {
    const detail: {name: string} = (event as CustomEvent).detail
    this.btnMap.right = this.btnMap.right.filter((btn: HeaderBtn | undefined) => (btn as HeaderBtn).name !== detail.name)
  }

  private removeLeftBtnEvent(event: Event) {
    const detail: {name: string} = (event as CustomEvent).detail
    this.btnMap.left = this.btnMap.left.filter((btn: HeaderBtn | undefined) => (btn as HeaderBtn).name !== detail.name)
  }

  private btnEvent(event: Event, eventName: string) {
    const defaultEvent = this.$choo.emit(eventName, event)
    if (eventName === Header.defaultBack.event && defaultEvent) {
      this.pageBack()
    }
  }

  private pageBack() {
    this.$choo.pop()
  }

}
</script>
