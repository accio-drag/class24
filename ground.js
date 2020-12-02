class Ground {

constructor(x,y,width,height){
    
    this.dhimant = Bodies.rectangle(x,y,width,height,{isStatic:true})
    World.add(world,this.dhimant)
    console.log(this.dhimant)
    this.w=width
this.h=height

}

display(){
    var dhimant = this.dhimant.position
    rectMode(CENTER)
    fill("brown")
    rect(dhimant.x,dhimant.y,this.w,this.h)

}





}