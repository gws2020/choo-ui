import { ToastOptions } from './index'

export class Toast {
  public message: string
  public duration: number
}

export default function (opt: ToastOptions) : Toast