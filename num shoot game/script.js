let numberOfCircle=84;
let container= document.querySelector('.dots-container')
let timer=document.querySelector("#timer")
let scoreVal= document.querySelector('#score')
let targetval=document.querySelector("#target")
 let target;
 let button;


restartGame();

 function restartGame(){
timerReset()
startTimer()
updateTarget()
generateNumber()
}

function timerReset(){
  timer.innerText=20
   scoreVal.innerText=0;
}

function startTimer(){
  setInterval(()=>{   
 let val= parseInt(timer.innerText)

if(timer.innerText==0){
  let ele= document.createElement('div')
  container.className="style"
  ele.innerText="Game over!"
  targetval.innerText=""

  container.innerHTML =` Score: ${scoreVal.innerText} 
                           <br>${ele.innerText} ` 
  
   button=document.createElement('button')
  button.className="btn"
  button.innerText='restart'
  
   container.append(button)
   button.addEventListener('click',restartGame)
  
   return;
}
  timer.innerText= parseInt(--val);

},1000)
}


function updateTarget(){
   if(timer.innerText!="")
   {
  target = Math.floor((Math.random()*10)+1)
  targetval.innerText = target
   }
}


function generateNumber(){
   container.innerHTML=""
  
for(let i=0;i<numberOfCircle;i++){

//<div class="dot"></div>
let div = document.createElement('div')
div.className="dot"
div.innerText= Math.floor((Math.random()*10)+1)
container.className="dots-container"
container.append(div)
  }
  
}


container.addEventListener('click',function(event){

  if(event.target.className === "dot"){
    let number = Number(event.target.innerText)
   
  if(number === target && timer.innerText!=0){
    let score= Number(scoreVal.innerText)
     score+=10
     console.log(score)
    scoreVal.innerText=score 
  }
  updateTarget();
  }
})