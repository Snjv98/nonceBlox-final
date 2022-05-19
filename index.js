var leftBlockNum = document.getElementById("left-b-header");    
var i=0
var timer;
function myF(event){
function counter(){
   if(i<=200) {
    leftBlockNum.innerText=i + "+";
   }
    i++;   
}
timer= setInterval(counter,10);
};
// window.addEventListener('scroll',()=>{
    // myF()});      
// document.getElementById("achievments-section").onscroll=(event)=>{console.log("scroll again")}


//first right subBlock
var rightBlockNum1 =document.getElementsByClassName("achiev-right-head-numbers")[0];
var h=0
var timer1;
function countStart1(event){
function counter1(){
   if(h<=200) {
    rightBlockNum1.innerText=h + "+";
   }
    h++;   
}
timer1= setInterval(counter1,10);
};
window.addEventListener('scroll',()=>{
countStart1()});
// document.getElementsByTagName("body")[0].onscroll=myF();
//To enable counting when scrolling starts

//for 12+ count
var rightBlockNum2 =document.getElementsByClassName("achiev-right-head-numbers")[1];
var j=0
var timer2;
function countStart2(event){
function counter2(){
   if(j<=12) {
    rightBlockNum2.innerText=j + "+";
   }
    j++;   
}
timer2= setInterval(counter2,100);
};
// window.addEventListener('scroll',()=>{
// countStart2()});

// counter function for 3rd right subblock
var rightBlockNum3 =document.getElementsByClassName("achiev-right-head-numbers")[2];
var k=0
var timer3;
function countStart3(event){
function counter3(){
   if(k<=12) {
    rightBlockNum3.innerText=k + "+";
   }
    k++;   
}
timer3= setInterval(counter3,100);
};
window.addEventListener('scroll',()=>{
countStart3()});

document.getElementById("left-b-header").onmouseover= function(){
    document.getElementById("left-b-header").classList.add("on_hover")}

document.getElementById("left-b-header").onmouseout= function(){
        document.getElementById("left-b-header").classList.remove("on_hover")}

document.getElementById("achievments-section").onmouseover= function(){//this function will triger when the mouse over throgh this section 
            myF()//myF() is being called here 
        }

        
//This function is for applying Zoom In and ZoomOut using javaScript
        /*function zoomin() {
            var getButton = document.getElementsByClassName("custom-btn")[0];
            var currWidth = getButton.clientWidth;
            getButton.style.width = (currWidth + 100) + "px";
        }

        function zoomout() {
            var getButton = document.getElementsByClassName("custom-btn")[0];
            var currWidth = getButton.clientWidth;
            getButton.style.width = (currWidth - 100) + "px";
        }

        document.getElementsByClassName("custom-btn")[0].onmouseover = function(){
            zoomin()
           }

        document.getElementsByClassName("custom-btn")[0].onmouseout = function(){
            zoomout()
           }*/