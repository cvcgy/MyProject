var backgroundImg, backgroundSprite
var jake, jakeImg
var creature1, creature1Img
var bow,bowImg, heading
var Score
var creature2, creature2Img
var creature01group, creature02group
var bowgroup


Score = 0


function preload(){
backgroundImg=loadImage("Images/underwaterBg3.jpg")
jakeImg = loadImage("Images/jakeSully.png")
creature1Img = loadImage("Images/creature1.png")
bowImg = loadImage("Images/bow.png")
creature2Img = loadImage("Images/creature2.png")
}



function setup(){
  createCanvas(800,700);


  //backgroundSprite = createSprite(400,250,800,2000)
  //backgroundSprite.addImage("myBg",backgroundImg)
  //backgroundSprite.scale = 2.22

  
 

  
  

  bowgroup = createGroup()
  creature01group = createGroup()
  creature02group = createGroup()




 
  
  jake = createSprite(100,425,50,50)
  jake.addImage("jake", jakeImg)
  jake.scale = 0.3
  


}
function draw() {  
  background(backgroundImg)
  textSize(50)
  text("Avatar",180,70)

  text("Score:"+Score, 360,70)
  var switchCase = Math.round(random (1,2))
  switch (switchCase)
  {
   case 1: creature01()
   break
   case 2: creature02()
   break
  }

 


  
  if (keyDown("right")) {
    bow = createSprite(150,425,50,50)
    bow.addImage("bow",bowImg)
    bow.scale = 0.3
    bow.velocityX = 2
    bow.y = jake.y
    bowgroup.add(bow)
    
  }
  
  
   drawSprites();

  if (keyDown("up")) {
    jake.y = jake.y-5
  }
  
  if (keyDown("down")) {
    jake.y=jake.y+5
  }

  if (creature01group.isTouching(bowgroup)) {

    Score = Score + 1
    bowgroup.destroyEach()
    creature01group.destroyEach()
  
  }

  if (creature02group.isTouching(bowgroup)) {
    Score = Score + 1
    bowgroup.destroyEach()
    creature02group.destroyEach()
  }
  
  

}




function creature01() {

if (frameCount%200 === 0) {
  creature1 = createSprite(700,425,50,50)
  creature1.addImage("creature1",creature1Img)
  creature1.scale = 0.3
  creature1.velocityX = Math.round(random(-1,-2))
  console.log(creature1.velocityX)
  creature1.y = Math.round(random(100,500))
  creature01group.add(creature1)
  }
}

function creature02() {
  if (frameCount%200 === 0) {
  creature2 = createSprite(700,425,50,50)
  creature2.addImage("creature2", creature2Img)
  creature2.scale = 0.3
  creature2.velocityX = Math.round(random(-1,-2))
  console.log(creature2.velocityX)
  creature2.y = Math.round(random(100,500))
  creature02group.add(creature2)
}
  }



