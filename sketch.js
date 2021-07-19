var dog,sadDog,happyDog;
var database;
var feedCount=0;
var fedTime,feed;
var addFood;
var foodS,foodStock;
var foodObj;
var gameState=0;





function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  foodStock=database.ref('milkBottle')
  foodStock.on("value",readStock);
  

foodObj=new Food();
fedTime=database.ref("lastFed");
fedTime.on("value",function(data){
  fedTime=data.val();
});

gameState=database.ref("gameState");
gameState.on("value",function(data){
  gameState=data.val();
})

  }
  feed=createButton("FEED ME ;I AM REALLY CUTE");
  feed.position(500,15);
  feed.mousePressed(feedDog);


  addFood=createButton("ADD FOOD");
  addFood.position(400,15);
  addFood.mousePressed(addFoods);
  
  




function draw() {
  background(46,139,87);
  drawSprites();
  text("PRESS THE KEYS TO FEED THE DOG",300,500);
  fill(255,255,254);
  textSize(15)
 if(gameState===1){
feed.hide();
addFood.hide();
dog.hide();
 }
 else{
   return
 }
 
drawSprites();
}

//function to update food stock and last fed time
function feedDog(){
dog.addImage(happyDog);



if(foodObj.getFoodStock()<=0){

  foodObj.updateFoodStock(foodObj.getFoodStock()*0);


}
else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
}
database.ref("/").update({
food:foodObj.getFoodStock(),
feedTime:hour()


})




}



function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

function update(state){
  database.ref("/");
  gameState=state;
}

function addFoods(){

  foodS++;
  database.ref("/").update({
    food:foodS
  })
}

function updateFoodStock(foodStock){ 

  database.ref('/').update({
    foodStock: foodStock
 
})
}
function getFoodStock(){
  var foodStockRef = database.ref('milkBottle');
    foodStockRef.on("value",(data)=>{
      foodStock = data.val();
    })
  




}





