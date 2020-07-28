import ChooUiMixins from '../../mixins'
import ScrollView, { PullDownStatus } from '../scroll-view'

export default abstract class PullDown extends ChooUiMixins {
  public name: string = 'pull-down'
  public $parent!: ScrollView
  public init() {
    this.$nextTick(() => {
      this.$parent.pullDown.status = PullDownStatus.ToBeActivated
    })
  }
}
