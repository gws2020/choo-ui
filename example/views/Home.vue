<template>
  <choo-page ref="page">
    <choo-header ref="header" slot="header">
      header
    </choo-header>
    <!-- <p slot="footer">
      footer
    </p> -->
  </choo-page>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Page, Header } from '../../types/component'

@Component
export default class Home extends Vue {
  public $refs!: {
    page: Page,
    header: Header
  }
  public created () {
    const toast = this.$choo.Toast({
      message: 'ccc'
    })
  }
  public mounted () {
    document.addEventListener('chooPageBack', (e) => {
      e.preventDefault()
      console.log('===333')
    })
  }
}
</script>