import isJSON from './isJSON'

export default class CreateDOM {

  public DOM!: HTMLElement

  public constructor (
    tag: string = 'section',
    attrs?: {
      [key: string]: {} | string
    },
    parentNode: HTMLElement = (
      document.querySelector('body') as HTMLBodyElement
    )
  ) {
    this.DOM = this.createDOM(tag, parentNode, attrs)
  }

  private createDOM(
    tag: string,
    parentNode: HTMLElement,
    attrs?: {
      [key: string]: {} | string
    }
  ): HTMLElement {
    const dom: HTMLElement = document.createElement(tag)
    const attrKey: string[] = Object.keys(attrs || {})
    attrKey.forEach((key: string) => {
      const value: {
        [key: string]: string
      } | string = attrs![key]
      if (isJSON(value)) {
        const styleList: string[] = Object.keys(value)
        styleList.forEach((style: string) => {
          (dom.style as any)[style] = (value as any)[style]
        })
      } else {
        dom.setAttribute(key, value as string)
      }
    })
    parentNode.appendChild(dom)
    return dom
  }
}
