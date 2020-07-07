var frect,mrect;
function setup() {
  createCanvas(400,400);
  frect= createSprite(200, 200, 50, 50);
  mrect=createSprite(10,200,50,50);
 frect.shapeColor="blue";
 mrect.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
   mrect.x=mouseX;
   mrect.y=mouseY;
   if(mrect.x-frect.x<mrect.width/2+frect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2
    && mrect.x-frect.x<mrect.height/2+mrect.height/2){
      frect.shapeColor="yellow";
      mrect.shapeColor="yellow";
    
    }
    else{
      frect.shapeColor="blue";
      mrect.shapeColor="blue";
  }

  drawSprites();
}