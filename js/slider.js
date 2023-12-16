"use strict"

var left = document.querySelector('.Left');
var right = document.querySelector('.Right');

var slider = document.querySelector('.slider');

var sectionInd=0;

right.addEventListener("click",turnRight)
function turnRight(){

    if(sectionInd<3){
        sectionInd++;
   slider.style.transform="translate("+sectionInd* (-25) +"%)"

}
}
left.addEventListener("click",turnLeft)
function turnLeft(){

    if(sectionInd<=3&&sectionInd>0){
        sectionInd--;
   slider.style.transform="translate("+sectionInd* (-25) +"%)"

}
}