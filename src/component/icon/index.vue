<template lang="pug">
  span(
    :class="[...themeClass, type, code]"
    :style="{fontSize: `${size}px`}"
  )
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import ChooUiMixins from '../../mixins'

@Component
export default class Icon extends ChooUiMixins {
  @Prop({
    default: 'chooui'
  })
  public type!: string

  @Prop()
  public code!: string

  @Prop({
    default: 14
  })
  public size!: number

  public name: string = 'icon'
}
</script>