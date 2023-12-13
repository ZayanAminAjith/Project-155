//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "D" || e.key == "d") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft" || e.key === "A" || e.key == "a") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent("diver-animations", {
  schema:{
    rotate : {type:"number", default: 0},
    scend : {type:"number", default: 0}
  },
  init: function () {
    window.addEventListener("keydown",(e)=>{
      this.data.rotate = this.el.getAttribute("rotation")
      this.data.scend = this.el.getAttribute("position")
      if(e.key === "ArrowRight" || e.key === "D" || e.key == "d"){
        if(this.data.rotate.x < 10){
          this.el.setAttribute("rotation", {
            x: this.data.rotate.x,
            y: this.data.rotate.y,
            z: this.data.rotate.z+0.5
          })
        }
      }
      if(e.key === "ArrowLeft" || e.key === "A" || e.key == "a"){
        if(this.data.rotate.x > -10){
          this.el.setAttribute("rotation", {
            x: this.data.rotate.x,
            y: this.data.rotate.y,
            z: this.data.rotate.z-0.5
          })
        }
      }
      if(e.key === "ArrowUp" || e.key === "W" || e.key == "w"){
        if(this.data.rotate.z < 20){
          this.el.setAttribute("rotation", {
            x: this.data.rotate.x-0.5,
            y: this.data.rotate.y,
            z: this.data.rotate.z
          })
        }
        if(this.data.scend.y < 2){
          this.el.setAttribute("position", {
            x: this.data.scend.x,
            y: this.data.scend.y-0.01,
            z: this.data.scend.z
          })
        }
      }
      if(e.key === "ArrowDown" || e.key === "S" || e.key == "s"){
        if(this.data.rotate.z > -20){
          this.el.setAttribute("rotation", {
            x: this.data.rotate.x+0.5,
            y: this.data.rotate.y,
            z: this.data.rotate.z
          })
        }
        if(this.data.scend.y > -2){
          this.el.setAttribute("position", {
            x: this.data.scend.x,
            y: this.data.scend.y+0.01,
            z: this.data.scend.z
          })
        }
      }
    })
  }
})





