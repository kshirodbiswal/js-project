//generating the random color

const randmColor=function () {
    
    const hex="0123456789ABCDEF"
    let color='#'
    for (let i = 0; i<6; i++) {
          color+=hex[Math.floor( Math.random()*16)]
        
    }
    return color;
}

function changeColor(){
    document.body.style.backgroundColor = randmColor()
}

let interval;

document.getElementById('start').addEventListener('click',()=>{
    if(!interval){
        interval=setInterval(changeColor,1000)
    }
})
document.getElementById('stop').addEventListener('click',()=>{
    clearInterval(interval)
    interval=null
})
      