import { Vue, Watch } from 'vue-property-decorator'
import { VueChooUI } from '../options'
import '../style/theme/default/index.scss'

export default abstract class ChooUiComponentMixins extends Vue {

  protected abstract name: string
  protected frameName: string = ''
  protected frameTheme: string = ''

  public get themeClass(): string[] {
    const { name, frameName, frameTheme } = this
    return [
      `${frameName}-${frameTheme}-${name}`,
      `${frameName}-${name}`
    ]
  }

  @Watch('$choo', {
    immediate: true,
    deep: true
  })
  private ChooUiOption (newOpt: VueChooUI): void {
    const { name, theme: { checked, map } } = newOpt
    this.frameName = name
    this.frameTheme = map![checked] !== undefined ? checked : 'default'
    try {
      require(`@/${map![checked]}/${this.name}.scss`)
    } catch (err) {
      this.frameTheme = 'default'
    }
  }
}
