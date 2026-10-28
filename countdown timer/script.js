const endDate="20 July 2025 12:00 PM"
document.getElementById("end-date").innerText=endDate
const inputs=document.querySelectorAll('input')
const clock= ()=>{
 const end= new Date(endDate)
 const now= new Date();
 const diff=(end-now)/1000
 console.log(diff);


 if(diff<0)return;
 //calculate days
 let days= Math.floor(diff/86400)
 console.log(days);
 //calculate hours
 let hours=Math.floor((diff-(days*86400))/3600)
 console.log(hours);
 //calculate minutes
 let minutes= Math.floor((diff-((days*86400)+(hours*3600)))/60)
 console.log(minutes);
 //calculate seconds
 let seconds= Math.floor(diff-((days*86400)+(hours*3600)+(minutes*60)))
 console.log(seconds);
 
 
inputs[0].value=days
inputs[1].value=hours
inputs[2].value=minutes
inputs[3].value=seconds
 
 
}

//initial call
clock()

setInterval(()=>{
    clock()
},1000)