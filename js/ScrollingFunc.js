
Scroll();
function Scroll(){
    var introText=document.getElementsByClassName("effected");
   var  screenPos=window.innerHeight/1.35;
for(var x=0;x<introText.length;x++){
   var introPosition=introText[x].getBoundingClientRect().top;
if(introPosition<screenPos){

    introText[x].classList.add("appear");

}

}
 
// console.log(introPosition);


}

window.addEventListener("scroll",Scroll)