var drop = [];
var x, y, size

function setup() {
  createCanvas(800, 800);
  for(var i = 0; i < 200; i++) {
    drop[i] = new Drop();
}
}

function draw(){
     if(mouseX<=width/2){
          background(135, 206, 235);
     }  else {
          background(0); //x position of the mouse determining day or night 
     }
  
    if (mouseX<=width/2) {
    fill(255, 255, 0);
  } else {
    fill(246, 241, 213); //x position of the mouse determing whether it's the sun or moon, sun in day, moon at night
  }

  if (mouseX>=0) {
    ellipse(720, 60, 60)
  }
    fill(0,154,23);
  rect(0, 300, 800, 300); //grass
  
    fill(169,169,169);
  triangle(110, 250, 220, 60, 320, 200);
  triangle(150, 300, 350, 0, 550, 300);
  triangle(-50, 300, 100, 0, 250, 300);
  triangle(500, 300, 600, 0, 700, 300);
  triangle(550, 300, 750, 100, 950, 300); //mountains
  
  
  fill(165,42,42);
  rect(550, 275, 250, 250);
  fill(205,133,63);
  triangle(550, 275, 650, 220, 650, 275);
  rect(650, 220, 150, 55);
  fill(160,82,45);
  rect(700, 450, 35, 75);
  fill(208,219,211); //house
  
  if(mouseX>=width/2){
    fill(255,255,0)
  }
  rect(600, 325, 50, 50);
  rect(780, 325, 50, 50); //window colours, if it's dark outside the windows are meant to show with lights on
  
  fill(9, 121, 105);
  x = 0;
  size = 60;
   for( var i = 0; i < 8; i++){
    x = 60+x
    y = 280 
    triangle(x, y-size, x+size, y+size, x-size, y+size); //triangles for the top trees
   }
  fill(139,69,19);
  rect(45, 340, 25, 120);
  rect(105, 340, 25, 120);
  rect(165, 340, 25, 120);
  rect(225, 340, 25, 120);
  rect(285, 340, 25, 120);
  rect(345, 340, 25, 120);
  rect(405, 340, 25, 120);
  rect(465, 340, 25, 120); //tree trunks for the top trees
  
  fill(9, 121, 105); 
  for( var i = 0; i < 7; i++){
    x = -55+x
    y = 410 
    triangle(x, y-size, x+size, y+size, x-size, y+size); //triangles for the bottom trees
   }
  
  fill(139,69,19);
  rect(80, 470, 25, 100);
  rect(138, 470, 25, 100);
  rect(195, 470, 25, 100);
  rect(248, 470, 25, 100);
  rect(303, 470, 25, 100);
  rect(357, 470, 25, 100);
  rect(413, 470, 25, 100);
  //tree trunks for the bottom trees  
  
  fill(0,89,179);
  rect(0, 600, 800, 200); //lake
  
  for(var i = 0; i < 200; i++) {
  drop[i].show();
  drop[i].update();
}
}

function Drop() { //determining the speed/shape of my rain and snow
  this.x = random(0, width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
     
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
}
    
    if (mouseY<=height/2) {
      this.y = random(0, -height);
      this.gravity = 0; //top half is no rain or snow, bottom half is one or the other
}
    if (mouseX<=width/2) {
      fill (0, 0, 255);
    } else {
      fill (255,255,255);
    } //The mouse position is determining whether its snowing or raining
}
} 