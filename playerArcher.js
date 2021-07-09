class playerArcher {
constructor(x,y,width,height){
var options={
 isStatic:true
        };
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.width=width=width;
 this.height=height;
 this.image=loadImage("assets/playerArcher.png");
 Matter.Body.setAngle(this.body,-p1/2);

 if(move==="UP"&& playerArcher.body.angle<1..77){
       angleValue=0.1;
   }else{
       angleValue=-0.1;
   }
   if(move)==="DOWN"&&playerArcher.body.angle>1.47){
       angleValue=-0.1;
   }else{
       angleValue=0.1;
   }


display();
       }
