import ChooUiMixins from '../../mixins'

export enum PullDownStatus {
  NotActive = 'NotActive',
  ToBeActivated = 'ToBeActivated',
  Actived = 'Actived',
  Execute = 'Execute',
  Notice = 'Notice',
  Done = 'Done'
}

interface PullDown {
  status: PullDownStatus
}

export default class Icon extends ChooUiMixins {
  public name: string
  public pullDown: PullDown
}