const button= document.querySelectorAll(".button")
console.log(button);
const body= document.querySelector("body")
const box=document.querySelector(".box")
button.forEach((button)=>{
    console.log(button);
 button.addEventListener("click", (e)=>{
    console.log(e);
    console.log(e.target);
    if(e.target.id ==="red"){
        body.style.backgroundColor="red"
    }
    if(e.target.id ==="green"){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==="yellow"){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==="blue"){
        body.style.backgroundColor=e.target.id
    }
    if(e.target.id ==="black"){
        body.style.backgroundColor=e.target.id
    }
 })
});

// body.style.backgroundColor="red"

