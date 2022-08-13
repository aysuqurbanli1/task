window.addEventListener("scroll", function(){
    var mainnav=document.querySelector(".ex");
    mainnav.classList.toggle("sticky",window.scrollY>0);
    })
    
    function senedler() {
    b=document.querySelector(".document-show");
    b.classList.toggle("show-block")
    
    }
    
    function questions() {
    b=document.querySelector(".open-questions");
    b.classList.toggle("show-questions")
    
    }
    function mainfield() {
    b=document.getElementById(".main-page");
    b.classList.toggle("show-field")
    
    }
    
    function opentext(){
    c=document.querySelector(".close-field");
    c.classList.toggle("show");
    }
    
    function opentext1(){
    c=document.querySelector(".close-field1");
    c.classList.toggle("show");
    }
    
    function opentext2(){
    c=document.querySelector(".close-field2");
    c.classList.toggle("show");
    }
    
    function opentext3(){
    c=document.querySelector(".close-field3");
    c.classList.toggle("show");
    }
    
    function opentext4(){
    c=document.querySelector(".close-field4");
    c.classList.toggle("show");
    }
    function opentext5(){
    c=document.querySelector(".close-field5");
    c.classList.toggle("show");
    }
    function opentext6(){
    c=document.querySelector(".close-field6");
    c.classList.toggle("show");
    }
    
    function opentext7(){
    c=document.querySelector(".close-field7");
    c.classList.toggle("show");
    }
    function opentext8(){
    c=document.querySelector(".close-field8");
    c.classList.toggle("show");
    }
    function opentext9(){
    c=document.querySelector(".close-field9");
    c.classList.toggle("show");
    }
    function opentext10(){
    c=document.querySelector(".close-field10");
    c.classList.toggle("show");
    }
    
    function opentext11(){
    c=document.querySelector(".close-field11");
    c.classList.toggle("show");
    }
    
    function opentext12(){
    c=document.querySelector(".close-field12");
    c.classList.toggle("show");
    }
    
    function opentext13(){
    c=document.querySelector(".close-field13");
    c.classList.toggle("show");
    }
    
    function opentext14(){
    c=document.querySelector(".close-field14");
    c.classList.toggle("show");
    }
    
    function opentext15(){
    c=document.querySelector(".close-field15");
    c.classList.toggle("show");
    }
    
    function opentext16(){
    c=document.querySelector(".close-field16");
    c.classList.toggle("show");
    }
    
    var senedbutton = document.querySelector(".document-show")
    var mainbutton = document.querySelector(".main-page")
    var sualbutton = document.querySelector(".open-questions")
    
    function senedler(){
    senedbutton.style.display = "block"
    mainbutton.style.display = "none"
    sualbutton.style.display="none"
    document.querySelector(".questionsborder").style.borderBottom="none";
    document.querySelector(".mainborder").style.borderBottom="none";
    document.querySelector(".documentborder").style.borderBottom="3px solid #FFC628";
    
    }
    
    function questions(){
    senedbutton.style.display = "none"
    mainbutton.style.display = "none"
    sualbutton.style.display="block"
    document.querySelector(".questionsborder").style.borderBottom="3px solid #FFC628";
    document.querySelector(".mainborder").style.borderBottom="none";
    document.querySelector(".documentborder").style.borderBottom="none";
    
    }
    
    function mainfield(){
    senedbutton.style.display = "none"
    mainbutton.style.display = "block"
    sualbutton.style.display="none"
    document.querySelector(".questionsborder").style.borderBottom="none";
    document.querySelector(".mainborder").style.borderBottom="3px solid #FFC628";
    document.querySelector(".documentborder").style.borderBottom="none";
    
    }
    
    function modal() {
        bb=document.querySelector(".modal");
        bb.classList.toggle("show-modal")
        
        }

    function modalclose() {
       
        bb=document.querySelector(".modal");
     
        bb.classList.remove("show-modal");
      
    }