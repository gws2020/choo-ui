import Vue from 'vue'

const emit: (
  eventName: string,
  detail: {},
  bind?: Vue | Document | Element
) => boolean = (
  eventName: string,
  detail: {},
  bind: Vue | Document | Element = document
): boolean => {
  if (bind instanceof Vue) {
    bind = (bind as Vue).$el
  }

  const event = new CustomEvent(eventName, { detail, cancelable: true });
  return (bind as Document | Element).dispatchEvent(event)
}

export default emit
