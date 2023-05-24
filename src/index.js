import creatHeading from './heading.js'

import about from './about.md'

const heading = creatHeading(about);
(function(a,b){
    console.log("a+b ="+a+b)
})(1,3)
document.body.append(heading)

