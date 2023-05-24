const path =require('path')

module.exports={
    mode:"none",// 工作模式 默认prodction / development /none
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path: path.join(__dirname,"output")
    },
    module:{
        rules:[
            {
                test:/.md$/,
                use:'./markdown-loader'
            }
        ]
    },
    optimization:{// webpack 内 集中优化的配置选项  tree shaking 摇树
        usedExports:true,// 只加载使用过的 代码片段   负责标记[枯树叶]
        minimize:true,// 开启代码压缩                 负责摇掉[枯树叶]
        //副作用
        sideEffects:true// 开启副作用

    }
}