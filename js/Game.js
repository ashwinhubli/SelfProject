AFRAME.registerComponent("game-play",{
schema:{
 elementId:{type:"string",default:"#checkpoint1"}   
 },
update:function(){
 this.isCollided(this.data.elementId)   
},
init:function(){
 var duration = 120;
 const timerE1 = document.querySelector("#timer");
},
 gameOver:function(){
  var carE1 = document.querySelector("#car_model")
  var element = document.querySelector("#game_over_text")
  element.setAttribute("visible",false)
  carE1.setAttribute("dynamic-body",{
   mass: 1   
  })  
 },
 isCollided:function(elementId){
  var elementId = document.querySelector(elementId)
     const element = document.querySelector(elementId);

  element.addEventListener("collide",(e)=>{
   if(elementId.includes("#laps")){
    element.setAttribute("visible",false)
    this.updateScore();
    this.updateLaps();   
   }
   else{
    this.gameOver();
   }   
  })
 }
})