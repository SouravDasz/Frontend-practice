fetch("https://randomuser.me/api/").then((data)=>{
    console.log(data.json())

}).catch((error)=>{
    console.log(error)
})