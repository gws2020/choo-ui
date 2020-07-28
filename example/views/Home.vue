<template>
  <choo-page ref="page">
    <choo-header ref="header" slot="header">
      header
    </choo-header>
    <choo-scroll-view
      ref="scroll"
      :y="y"
      @pull-down="pullDown"
    >
      <!-- <template
        v-slot:pullDown="{ pullDown }"
      >
        <PullDown v-bind="pullDown"></PullDown>
      </template> -->
      <p v-for="i in count" @click="add" :key="`p-${i}`">333</p>
    </choo-scroll-view>
    <p slot="footer">
      footer
    </p>
  </choo-page>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Page, Header } from '../../types/component'

import PullDown from './pullDown.vue'

@Component({
  components: {
    PullDown
  }
})
export default class Home extends Vue {
  public $refs!: {
    page: Page,
    header: Header
  }
  public count: number = 30
  public y: number = 0
  public created () {
    document.addEventListener('chooPageBack', (e) => {
      e.preventDefault()
      const toast = this.$choo.Toast({
        message: 'ccc',
        duration: 300
      })
    })
  }

  public mounted () {
    // this.$nextTick(() => {
    //   setTimeout(() => {
    //     this.$refs.scroll.exePullDown()
    //   }, 3000)
    // })
  }
  private add () {
    this.count += 1
  }

  private pullDown(a, b) {
    setTimeout(() => {
      b()
    }, 3000)
  }
}
</script>