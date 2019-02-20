const setWatcher = (data, watch) => {
  for (let i in data) {
    observe(data, i, watch[i] ? watch[i]:null)
  }
}
const observe = (data, key, watchFn) => {
  let val = data[key];
  Object.defineProperty(data, key, {
    set(value) {
      watchFn?watchFn(value,val):null;
      val = value;
      return true;
    },
    get(value) {
      return val
    }
  })
}
export default setWatcher;