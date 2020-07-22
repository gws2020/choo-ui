import { Component, Vue } from 'vue-property-decorator'

export class VueChooUI {
  public name!: string
  public theme!: ChooTheme
}

export interface ThemeTemplate {
  [key: string]: string
}

export interface ChooTheme {
  checked: string
  map?: ThemeTemplate
}

@Component
export default class Options extends Vue {
  public options: VueChooUI = new VueChooUI()
}
