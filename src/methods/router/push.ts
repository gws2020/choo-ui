import { RawLocation } from 'vue-router'
import chooui from '../../index'
type ErrorHandler = (err: Error) => void

export default (
  location: RawLocation,
  onComplete?: () => {},
  onAbort?: ErrorHandler
) => {
  chooui.router.push(
    location,
    onComplete,
    onAbort
  )
}
