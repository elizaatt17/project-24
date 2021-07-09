shoot(archerAngle){
    var velocity=p5.vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{x:velocity,x,:velocity.y});
}

if(keyCode===32){
    arrow.shoot(playerArcher.body.angle);
}