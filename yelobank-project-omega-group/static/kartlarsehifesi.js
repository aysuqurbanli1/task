window.addEventListener("scroll", function(){
    var mainnav=document.querySelector(".ex");
    mainnav.classList.toggle("sticky",window.scrollY>0);
    })
    
    function read(){
    var i=0;
    if(!i){
    document.getElementById("more").style.display="inline";
    document.getElementById("readmore").style.display="none";
    document.getElementById("point").style.display="none";
    }
    }
    

    function modal() {
        bb=document.querySelector(".modal");
        bb.classList.toggle("show-modal")
        
        }

    function modalclose() {
       
        bb=document.querySelector(".modal");
     
        bb.classList.remove("show-modal");
      
    }
        
    