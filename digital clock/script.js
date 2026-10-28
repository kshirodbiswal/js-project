const clock=document.getElementById("clock")

setTimeout(function(){
    const date=new Date
    clock.innerHTML=date.toLocaleTimeString()
},1000)

let interval ;
    document.getElementById('start').addEventListener('click',()=>{
       interval = setInterval(function(){
        const date=new Date
        clock.innerHTML=date.toLocaleTimeString()
    },1000)
    
    })

    document.getElementById("stop").addEventListener('click',()=>{
        clearInterval(interval)
    })