const modulesContext = require.context('../', true, /modules\/.*\.js$/)
export default modulesContext.keys().reduce((modules, key) => {
  let _key = key.replace(/[^\/]*[\/]+/g, '').replace(/(^\.\/)|(\.js$)/g, '')

  // 未知BUG。。。
  modules[_key] = modulesContext(key).default
  return modules
  
}, {})
// require.context是webpack的语法，返回值为一个对象，过滤特定文件目录下的特定文件
// require.context(directory:String, includeSubdirs:Boolean /* optional, default true */, filter:RegExp /* optional */)

// Example:
// var context = require.context('components', true, /\.html$/);
// var componentA = context.resolve('componentA');
