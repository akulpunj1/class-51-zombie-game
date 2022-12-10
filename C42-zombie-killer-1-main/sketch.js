var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombie_Img;
var heart1, heart2,heart3,heart1Img,heart2Img,heart3Img
var zombieGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombie_Img = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  zombieGroup=new Group()

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//heart image
heart1=createSprite(displayWidth-150,40,20,20)
heart1.addImage(heart1Img)
heart1.scale=0.3

heart2=createSprite(displayWidth-100,40,20,20)
heart2.addImage(heart2Img)
heart2.scale=0.3

heart3=createSprite(displayWidth-50,40,20,20)
heart3.addImage(heart3Img)
heart3.scale=0.3



//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
  player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 
  enemy();
  if (zombieGroup.isTouching(player)){
    for(var i=0;i<zombieGroup.length;i=i+1){
      if(zombieGroup[i].isTouching(player)){
        zombieGroup[i].destroy()
      }
    }
  }
  




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyDown("space")){
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else {
 // player.addImage( shooter_shooting )
 // player.addImage()
player.addImage(shooterImg)
 //player.addImage(shooter_1.png)
}
 function enemy(){
  if (frameCount%50===0){
   zombie = createSprite(displayWidth-100,random(displayHeight-200),50,50)
   zombie.addImage(zombie_Img)
   zombie.scale = 0.2
   zombie.velocityX=zombie.velocityX-5
   zombieGroup.add(zombie);
   zombie.lifetime=350;
   zombie.debug=true;
   zombie.setCollider("rectangle",0,0,500,1000)

  }

 }

drawSprites();



}
