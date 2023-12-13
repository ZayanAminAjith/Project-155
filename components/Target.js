// Registering component in Target.js

AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 100 + (-50));      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + (-40));
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      ringEl.setAttribute("material","color","#ff9100");
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 2 });   
      ringEl.setAttribute("static-body", {shape:"sphere",sphereRadius:3});
      ringEl.setAttribute("collision", {elementId:`#${id}`})

      terrainEl.appendChild(ringEl);
    }
  });
  
  AFRAME.registerComponent("floating-fishes",{
    init: function(){
      for (var i = 1; i <= 20; i++) {
        var id = `fish${i}`

        var posX =(Math.random() * 100 + (-50));      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + (-40));
  
        var position = {x:posX,y:posY,z:posZ}
  
        this.fishes(id,position)
      }
    },
  
    fishes: function(id,position){
      var fishEl = document.createElement("a-entity")
      fishEl.setAttribute("id",id)
      fishEl.setAttribute("position",position)
      fishEl.setAttribute("gltf-model","./assets/models/fish/scene.gltf")
      fishEl.setAttribute("animation-mixer",{})
      fishEl.setAttribute("scale", {x:1,y:1,z:1})
      fishEl.setAttribute("static-body", {shape:"sphere",sphereRadius:3});
      fishEl.setAttribute("collision", {elementId:`#${id}`})
      var terrainEl = document.querySelector("#terrain")
      terrainEl.appendChild(fishEl)
    }
  })
