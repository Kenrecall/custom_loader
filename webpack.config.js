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
    }
}