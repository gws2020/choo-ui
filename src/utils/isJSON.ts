export default (obj: any) => {
  return typeof obj === 'object' &&
  Object.prototype.toString.call(obj).toLowerCase() === '[object object]' &&
  !obj.length
}
