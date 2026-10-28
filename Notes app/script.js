const containerBox=document.querySelector(".container-box");
const button= document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box")
const main=document.querySelector(".main")
 


button.addEventListener("click",()=>{

createNotes();

})

containerBox.addEventListener("click",(e)=>{
if(e.target.tagName === "IMG")
{
    e.target.parentElement.remove()
     saveNotes(note)
}

else {
      let note=document.querySelector("#input");
      saveNotes(note)
    //   console.log(note.innerHTML);
      
     
     }
})


function createNotes(){
    let inputBox=document.createElement("p")
inputBox.id="input"
let image = document.createElement("img")
inputBox.className ="input-box relative bg-white text-[#333] w-full max-w-125 min-h-40 border-0 outline-none p-5 mt-5  rounded-md"
inputBox.setAttribute("contenteditable",true)
image.src="delete.png"
image.className="  absolute  cursor-pointer h-[25px]  bottom-1 right-2"
// image.setAttribute("width" ,"24px")
containerBox.appendChild(inputBox)
inputBox.appendChild(image)
}

function saveNotes(note){
  localStorage.setItem("note",note)
}

