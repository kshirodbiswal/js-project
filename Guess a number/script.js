  let randomNumber=parseInt(Math.floor((Math.random()*100)+1))
  const userInput=document.querySelector('#guess')
  const submit=document.querySelector("#sub")
  let prevGuess=document.querySelector("#prevGuess")
  const remaining=document.querySelector("#remaining")
  const lowOrHigh=document.querySelector("#lowOrHigh")
  const resultP=document.querySelector(".result")

const p=document.createElement('p')

  // document.createElement('p')

  let prevNumGus=[]
  let gusRemain=1
  let play=true
  
  if (play) {
    submit.addEventListener('click',(e)=>{
       e.preventDefault();
       const guess=parseInt(userInput.value)
    //    console.log(guess);
       validGuess(guess)
    })
  }
  function validGuess(guess){

  if (isNaN(guess)) {
    alert("please Enter a valid number")
  }
  else if (guess<1) {
    alert("please Enter a number greter than 1")
  }
  else if (guess>100) {
    alert("please Enter a number less than 100")
  }
  else{
    prevNumGus.push(guess)
    if (gusRemain>=10) 
    { 
    lastExectn()
    displayMsg(`Game over ! random number was ${randomNumber}`)
    endGame()
   }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
  }

  function checkGuess(guess){
      if(guess===randomNumber)
      {
        displayMsg('You Guessed Right')
      endGame()
    }
   else if(guess>randomNumber)
      displayMsg(' Number is Higher')
    else
      displayMsg(' Number is lower')
  }
 function displayMsg(message){
    lowOrHigh.innerHTML= `<h2>${message}</h2>`
 }

  function displayGuess(guess){

       userInput.value=''
       prevGuess.innerHTML=` ${prevNumGus} `
       remaining.innerHTML= `${10-gusRemain}`
       gusRemain++;    

  }
   function lastExectn() {
    prevGuess.innerHTML=` ${prevNumGus} `
    remaining.innerHTML= `${10-gusRemain}`
   }

  function endGame(){
  userInput.value=''
  userInput.setAttribute("disabled",'')
   p.classList.add('button')
   p.style.backgroundColor='red'
   p.innerHTML='<h2 id="newGame">Start New Game</h2>'
   resultP.appendChild(p)
   play=false
   newGame()
  }

  function newGame(){

   const newGame= document.querySelector("#newGame")
   newGame.addEventListener('click',(e)=>{
     randomNumber=parseInt(Math.floor((Math.random()*100)+1))
     prevNumGus=[]
     gusRemain=1
     prevGuess.innerHTML=` `
     remaining.innerHTML= `${11-gusRemain}`
     lowOrHigh.innerHTML=''
     userInput.removeAttribute('disabled','')
     resultP.removeChild(p)
    play=true
   })

  }

 