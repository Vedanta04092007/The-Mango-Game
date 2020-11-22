class Tree {
constructor(x,y){
this.body=Bodies.rectangle(x,y,500,10,{isStatic:true});
World.add(world,this.body);
this.image=loadImage("Images/tree.png");

}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos,y);
fill(255);
imageMode(CENTRE);
image(this.image,0,-300,450,600);


}


}