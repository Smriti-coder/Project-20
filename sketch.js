var garden, gardenImg; 
var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;    

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png", "images/cat3.png");
    catImg4=loadImage("images/cat4.png");

    
    
    mouseImg1= loadImage("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg4= loadImage("images/mouse4.png"); 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden= createSprite(200,200,10,10);  
    garden.addImage("garden", gardenImg); 
    
    cat= createSprite(360,400);
    cat.addImage("starting" , catImg1);
    cat.scale= 0.1;

    mouse= createSprite(50, 400); 
    mouse.addImage("starting", mouseImg1); 
    mouse.scale= 0.1;

   
}

function draw() {

    background(255);
    
    text(mouseX + ',' + mouseY, 10, 45);
        
    drawSprites();
    keyPressed();
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (((cat.width - mouse.width)/2) + 55)){
         cat.velocityX= 0;
         
         cat.addAnimation("catLastImage", catImg4); 
         cat.changeAnimation("catLastImage");
         
         console.log(cat.x);
         console.log(mouse.x);

         mouse.addAnimation("mouseLastImage", mouseImg4);
         mouse.changeAnimation("mouseLastImage");
    }
}


function keyPressed(){
  //For moving and changing animation write code here
     if(keyCode === LEFT_ARROW){
           cat.velocityX= -5; 
           cat.addAnimation("catRunning", catImg2);
           cat.changeAnimation("catRunning"); 
           
           mouse.addAnimation("mousemoving", mouseImg2);
           mouse.changeAnimation("mousemoving"); 
          
     }
}     
