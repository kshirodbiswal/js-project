
let smallCursor= document.querySelector(".smallCursor")
let shadowCursor=document.querySelector(".shadowCursor")
let mouseX=0;
let mouseY=0;
let animationId=null
let timer=null;

document.addEventListener("mousemove",(eventObj)=>{
    mouseX=eventObj.clientX+"px"
    mouseY=eventObj.clientY+"px"
    
smallCursor.style.left=mouseX
smallCursor.style.top=mouseY

if(!animationId)
{
animateShadowCursor();
}
 

clearTimeout(timer)
  timer=setTimeout(()=>{
    animationId=null
    cancelAnimationFrame(animationId)
},3000)

})

function animateShadowCursor(){
   let currentX=parseFloat(shadowCursor.style.left) || 0 
   let currentY=parseFloat(shadowCursor.style.top)|| 0 

   let distanceX= parseFloat(mouseX)-currentX
   let distanceY=parseFloat(mouseY)-currentY
  
   shadowCursor.style.left= currentX+distanceX*0.1+'px'
   shadowCursor.style.top= currentY+distanceY*0.1+'px'

    animationId=requestAnimationFrame(animateShadowCursor)
    
console.log(animationId)
}
