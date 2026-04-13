var mode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  
  if (mode == 1) {
    splash.hide();
    
    // your code here
    background(0);
    fill(100);
    noStroke();
    f
  }
}

class spiral{
  
  constructor(){
    this.counter = 0;
    this.radCounter = 0;
  }
  
  colors(){
    
  }
  
}


