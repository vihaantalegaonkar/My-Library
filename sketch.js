var fixedrect, movingrect;

function setup() {
  createCanvas(1200,1200);
  movingrect = createSprite(400, 800, 50, 50);
  fixedrect = createSprite(400,200,110,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.velocityY = -2;
  fixedrect.velocityY = 2;
}

function draw() {
  background(255,255,255); 
  if(isTouching(movingrect,fixedrect)){
      movingrect.shapeColor = "red";
      fixedrect.shapeColor = "red";
    } 
    bounceOff(movingrect,fixedrect);

  drawSprites();
}