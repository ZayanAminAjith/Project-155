AFRAME.registerComponent("collision",{
    schema: {
        elementId:{type:"string",default:""}
    },
    
    update: function(){
        this.isCollide(this.data.elementId)
    },

    isCollide: function(elementId){
        var element = document.querySelector(elementId)
        element.addEventListener("collide",(ea)=>{
            if(elementId.includes("#coin")){
                console.log("Diver collided with coin.") 
            }
            if(elementId.includes("#fish")){
                console.log("Diver collided with fish.") 
            }
        })
    }
    
})