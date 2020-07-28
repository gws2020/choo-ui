<template lang="pug">
  span(
    :class="[...themeClass, type, code]"
    :style="{fontSize: `${size}px`}"
  )
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import ChooUiMixins from '../../mixins'

@Component({
  props: {
    size: {
      default: 14
    },
    code: {},
    type: {
      default: 'chooui'
    }
  }
})
export default class Icon extends ChooUiMixins {
  public type!: string
  public code!: string
  public size!: number

  public name: string = 'icon'
}
</script>