import creatHeading,{a} from './heading.js'

import about from './about.md'


const heading = creatHeading(about);
(function(a,b){
    console.log("a+b ="+a+b)
})(1,3)
console.log("heading,a："+a)
document.body.append(heading)
document.body.append()

