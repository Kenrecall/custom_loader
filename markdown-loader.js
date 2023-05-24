// 每个loader 都需要返回一个函数，该函数就是处理对应资源的过程
// 返回的必须是一段 js 代码块

var marked  = require('marked')

module.exports = source=>{
    const html = marked.marked(source);
    console.log(html)
    return `module.exports =${JSON.stringify(html)}`
}