const apiUrl="https://api.github.com/users/"

const getUser= async(username)=>{
 const response= await fetch(apiUrl + username)
 const data = await response.json()
 console.log(data);
 
}

getUser(hiteshchoudhary)