document.addEventListener("keydown", function(e){
   if (e.key === 'w' ){
      var audio = new Audio("tom-1.mp3")
      audio.play()
   }
   else{console.log("error")}
})

document.addEventListener("keydown", function(e){
   if (e.key === 'a' ){
      var audio = new Audio("tom-2.mp3")
audio.play()
   }
   else{console.log("error")}
})

document.addEventListener("keydown", function(e){
   if (e.key === 's' ){
      var audio = new Audio("tom-3.mp3")
audio.play()
   }
   else{console.log("error")}
})

document.addEventListener("keydown", function(e){
   if (e.key === 'd' ){
      var audio = new Audio("tom-4.mp3")
      audio.play()
   }
   else{console.log("error")}
})

document.addEventListener("keydown", function(e){
   if (e.key === 'j' ){
      var audio = new Audio("crash.mp3")
audio.play()
   }
   else{console.log("error")}
})

document.addEventListener("keydown", function(e){
   if (e.key === 'k' ){
      var audio = new Audio("kick-bass.mp3")
      audio.play()
   }
   else{console.log("error")}
})

document.addEventListener("keydown", function(e){
   if (e.key === 'l' ){
      var audio = new Audio("snare.mp3")
audio.play()
   }
   else{console.log("error")}
})



document.querySelectorAll("button")[0].addEventListener("click",()=>{var audio = new Audio("tom-1.mp3")
audio.play()})
document.querySelectorAll("button")[1].addEventListener("click",()=>{ var audio = new Audio("tom-2.mp3")
audio.play()})
document.querySelectorAll("button")[2].addEventListener("click",()=>{var audio = new Audio("tom-3.mp3")
audio.play()})
document.querySelectorAll("button")[3].addEventListener("click",()=>{var audio = new Audio("tom-4.mp3")
audio.play()})
document.querySelectorAll("button")[4].addEventListener("click",()=>{var audio = new Audio("crash.mp3")
audio.play()})
document.querySelectorAll("button")[5].addEventListener("click",()=>{var audio = new Audio("kick-bass.mp3")
audio.play()})
document.querySelectorAll("button")[6].addEventListener("click",()=>{ var audio = new Audio("snare.mp3")
audio.play()})

   
      document.querySelector(".w").addEventListener("click",function (){document.querySelector(".w").classList.add("pressed")})
      document.querySelector(".a").addEventListener("click",function (){document.querySelector(".a").classList.add("pressed")})
      document.querySelector(".s").addEventListener("click",function (){document.querySelector(".s").classList.add("pressed")})
      document.querySelector(".d").addEventListener("click",function (){document.querySelector(".d").classList.add("pressed")})
      document.querySelector(".j").addEventListener("click",function (){document.querySelector(".j").classList.add("pressed")})
      document.querySelector(".k").addEventListener("click",function (){document.querySelector(".k").classList.add("pressed")})
      document.querySelector(".l").addEventListener("click",function (){document.querySelector(".l").classList.add("pressed")})
      setTimeout(
        document.querySelector(".w").classList.remove("pressed"),100);


  
