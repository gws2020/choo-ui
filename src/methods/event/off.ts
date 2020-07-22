import Vue from 'vue'

const off: (
  eventName: string,
  callback: EventListenerOrEventListenerObject,
  bind?: Vue | Document
) => void = (
  eventName: string,
  callback: EventListenerOrEventListenerObject,
  bind: Vue | Document | Element = document
): void => {
  if (bind instanceof Vue) {
    bind = (bind as Vue).$el
  }

  (bind as Document | Element).addEventListener(eventName, callback)
}

export default off
