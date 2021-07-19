class Food{
constructor(){
  this.image=loadImage("Images/Milk.png");
  this.foodS=foodS;
  this.lastFed=lastFed;
  this.foodStock=0;
}





getFedTime(lastFed){
  this.lastFed=lastFed;
}





foodMinus(){
  if(mousePressed(feed)&&this.foodStock>0){
  this.foodStock-=1;
  }

}

FoodG(){
  if(mousePressed(addFood)){
    this.foodStock+=1;
  }

}
display(){
  if(this.lastFed>=12){
    text ("LAST FED:"+lastFed%12+"PM",50,30);

  }
  else if(lastFed===0){
    text("LAST FED:12AM",50,30)
  }

  else{
    text("LAST FED:"+lastFed+"AM",50,30);
  }


  var x=70,y=100;
  imageMode (CENTER);
  if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
      x=70;
      y=y+50;
    }
    image(this.image,0,0,50,50)
    x=x+30;
  }
}

}