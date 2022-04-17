AFRAME.registerComponent("target-checkpoints",{
    init:function(){
      for(i =1;i<=20;i++){
        var id = `ring${i}`;
        var posx = (Math.random()*3000+(-1000))  
        var posz = (Math.random()*3000+ -1000)  
        var position = {x:posx,y:0.5,z:posz}
        
        this.createRings(id,position)
      }
    },
    createRings:function(id,position){
      var map1 = document.querySelector("#map"); 
  
      var check1 = document.createElement("a-entity");
      check1.setAttribute("id",id);
      check1.setAttribute("position",position);
      check1.setAttribute("material","color","#00FFFFFF"); 
      check1.setAttribute("geometry",{primitive:"cylinder",radius:8}); 
      check1.setAttribute("static-body",{shape:"sphere",sphereRadius:2})
      check1.setAttribute("game-play",{elementId:`#${id}`})
  
      map1.appendChild(check1);
  }
  
  })