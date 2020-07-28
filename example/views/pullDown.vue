<template lang="pug">
  p(
    v-if="status === 'Execute'"
    style='height: 300px'
  )
    |{{status}} ---
  p(
    v-else
  )
    |{{status}}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { component } from '../..'

const {
  PullDown
} = component

@Component({
  props: {
    status: {
      type: String
    }
  }
})
export default class PullDowns extends PullDown {
  public test: string = 'test'

  public created() {
    this.init()
  }
}
</script>
