const form=document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault() //prevent the deault action i.e. sending the value to server

 const height=parseInt(document.getElementById('height').value)   //parseInt method convets the value of string type to integer type.
 const weight=parseInt(document.getElementById('weight').value)
 const result=document.getElementById('result')

 if (height===''||height<=0||isNaN(height)||height===null) {
    result.innerHTML="<p>Please enter a valid height</p>"
 }
})