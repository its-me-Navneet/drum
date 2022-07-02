var b=document.querySelectorAll(".drum") ; 
 

 
for(let i=0;i<7;i++){
  b[i].addEventListener("click",function(event){
    var c=this.innerHTML  ;  
   // console.log(c) ;
     fun(c) ; 
     animation(c);
  })

 }
  
function fun(symbol){ 
     // var symbol =this.innerHTML ; 
       
       switch (symbol) {
        case "a":
            var audio = new Audio("sounds/crash.mp3") ;
            audio.play() ;
            break;
         case "w":
            var audio= new Audio("sounds/kick-bass.mp3") ; 
             audio.play() ; 
              break; 
         case "s":
                var audio = new Audio("sounds/snare.mp3") ;
                audio.play() ;
                break;
         case "d":
                var audio= new Audio("sounds/tom-1.mp3") ; 
                 audio.play() ; 
                  break;
         case "j":
                   var audio = new Audio("sounds/tom-2.mp3") ;
                    audio.play() ;
                    break;
         case "k":
                        var audio = new Audio("sounds/tom-3.mp3") ;
                        audio.play() ;
                        break;
         case "l":
                   var audio= new Audio("sounds/tom-4.mp3") ; 
                     audio.play() ; 
                  break;
        default:
            break;
       }
    
} 
  document.addEventListener("keypress",function(event){
    // console.log(event.key) ; 
    fun(event.key) ; 
    animation(event.key) ;
  }) 
   
  function animation(key){
    var v=document.querySelector("."+key) ; 
   v.classList.add("pressed") ; 
    setTimeout(function(){
       v.classList.remove("pressed") ;  
    },100);
  }
  

 