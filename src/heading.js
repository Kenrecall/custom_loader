export default  function(innerHTML ="Hello World !"){
    const element = document.createElement('div·')
    element.innerHTML =innerHTML; 
    element.addEventListener('click',function(){
        alert(this.innerHTML)
    })

    return element
}

export const a =1;