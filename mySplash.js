class Splash {

 constructor() {
   
  this.splashBorder = 100;
  fill(255);
  stroke(255, 0, 0)
  rect(this.splashBorder-(windowWidth/2), this.splashBorder-(windowHeight/2), windowWidth-this.splashBorder*2, windowHeight-this.splashBorder*2);
  fill(0, 0, 222);
  strokeWeight(3)
   
  line(windowWidth/2-this.splashBorder-40, -windowHeight/2 + this.splashBorder+20,windowWidth/2-this.splashBorder-20, -windowHeight/2 + this.splashBorder+40)
   line(windowWidth/2-this.splashBorder-20, -windowHeight/2 + this.splashBorder+20,windowWidth/2-this.splashBorder-40, -windowHeight/2 + this.splashBorder+40)
   
  this.title = createDiv("Spiral Screensavers");
  this.title.style('color:deeppink');
  this.title.style('font-family: Arial');
  this.title.position(this.splashBorder+20, this.splashBorder+20);
  
  this.name = createDiv("By Hayley Camp");
  this.name.position(this.splashBorder+20, this.splashBorder+60);
  
  this.info = createDiv("I was inspired to make this project because I was so mesmerized by screen savers as a kid and with my background in math I thought it could be cool to design my own. <p> <a href=>https://editor.p5js.org/hayleycamp/sketches/STN2hZfiT");
  
  this.info.position(this.splashBorder+20, this.splashBorder+100);
  this.info.size(windowWidth-this.splashBorder*2-50, windowHeight-this.splashBorder*2-50)
   

  
}
  
  update(){
       if(mouseX > windowWidth-this.splashBorder-40 && 
          mouseX < windowWidth-this.splashBorder-20 && mouseY < this.splashBorder+40 && mouseY > -this.splashBorder+20
     ){
     return true

   }
  }
 
  hide(){
    this.title.remove()
    this.name.remove()
    this.info.remove()
  }
}

