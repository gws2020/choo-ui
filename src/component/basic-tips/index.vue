<template lang="pug">
  section(
    :class="themeClass"
  )
    slot
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import ChooUiMixins from '../../mixins'

@Component
export default class Tips extends ChooUiMixins {
  public name: string = 'tips'
}
</script>