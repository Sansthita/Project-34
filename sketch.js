//Create variables here
var dog, dogImg, happyDog, happyDogImg, database, foodS, foodStock

function preload(){
	//load images here
dogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
 var dog = createSprite(250, 250, 20, 20);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  var foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}



function draw() {  
  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeImage(happyDogImg);
  }
  drawSprites();
  //add styles here
  fill("white");
  // textSize(15);
  text("Press UP_ARROW Key To Feed Drago Milk!", 140, 50);
}

function readStock(data){
  foodS = data.val;
}

function writeStock(x){

  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

