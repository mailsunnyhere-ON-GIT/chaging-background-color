let button=document.querySelectorAll(".color-item")
let backroom=document.querySelector("body")

button.forEach(function (bt){
      
       bt.addEventListener("click",function(e){
           
             if(e.target.id==="red")
             backroom.style.background=e.target.id
             if(e.target.id==="green")
             backroom.style.background=e.target.id
             if(e.target.id==="blue")
             backroom.style.background=e.target.id
             if(e.target.id==="brown")
             backroom.style.background=e.target.id
             if(e.target.id==="pink")
             backroom.style.background=e.target.id
             if(e.target.id==="yellow")
             backroom.style.background=e.target.id

       })


})

let reseter=document.querySelector("#reset")
reseter.addEventListener("click",function(e)
{
    backroom.style.background="white"
})