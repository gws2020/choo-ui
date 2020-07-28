
import { Component } from 'vue-property-decorator'
import { VNode } from 'vue'
import PullDownExtends from '../pull-down'

enum PullDownStatus {
  NotActive = 'NotActive',
  ToBeActivated = 'ToBeActivated',
  Actived = 'Actived',
  Execute = 'Execute',
  Notice = 'Notice',
  Done = 'Done'
}

@Component({
  props: {
    status: {
      default: PullDownStatus.NotActive
    }
  }
})
export default class PullDown extends PullDownExtends {
  public height: number = 0
  private status!: PullDownStatus
  public mounted(): void {
    super.init()
  }
  public render(): VNode {
    if (this.status !== PullDownStatus.Execute) {
      return (
        <section class={[...this.themeClass]}>pull down---{this.status}</section>
      )
    } else {
      return (
        <section class={[...this.themeClass]} style="height: 50px;">pull down---{this.status}</section>
      )
    }
  }
}
