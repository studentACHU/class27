class Chain{
constructor(bodyA,bodyB)
{

    var opt={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffnness:0.04,
        length:10
            }
      this.chain=Constraint.create(opt);
        World.add(world,this.chain);

}

display(){
var pointA=this.chain.bodyA.position;
var pointb=this.chain.bodyB.position;

strokeWeight(4);
line(pointA.x,pointA.y,pointb.x,pointb.y);



}
}
