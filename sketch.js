var mode = 0;
var disp = 0;
var speed = 0.001
var yes = 0

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  splash = new Splash();
  
  spiral = new Spiral()
}

function draw() {
  //console.log(mouseX, mouseY, windowWidth, windowHeight)
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  
  if (mode == 1) {
    splash.hide();
    background(0);
    mode = 2;

  }
  
  if (mode == 2){

    background(0);
    fill(100,100,0)
    noStroke()
    yes = 1
    
    if (yes == 1){
       spiral.spiralAtomic(100, 100, 0, 10, 1, 800)
    }
}
}


class Spiral {
  
  constructor(){
    this.counter = 0;
    this.counter2 = 0;
    this.radCounter = 0;
    this.disp = 0;
    this.ind = 1;
    this.speed = 0;
    this.revers = 0.000001;
    this.distance3D = 0;
  }
  
  spiralArch(r, g, b, distance, speed, phaseLength){
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    for (let i = 0; i <= 200; i = i + 1){
      let x = (distance * this.radCounter) * cos(this.radCounter)
      let y = (distance * this.radCounter) * sin(this.radCounter)
      circle(x, y, 10)
      // console.log(x, y)
      this.radCounter = this.radCounter + (0.01 + this.speed) * this.revers + this.revers
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = cos(this.counter/phaseLength)
  }
  
  spiralLog(r, g, b, distance, speed, phaseLength){
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    for (let i = 0; i <= 200; i = i + 1){
      let x = (distance * exp(0.1 * this.radCounter)) * cos(this.radCounter)
      let y = (distance * exp(0.1 * this.radCounter)) * sin(this.radCounter)
      circle(x, y, 10)
      // console.log(x, y)
      this.radCounter = this.radCounter + (0.01 + this.speed) * this.revers + this.revers
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = abs(cos(0.5 * this.counter/phaseLength))
  }
  
  
   spiralAtomic(r, g, b, a, speed, phaseLength){
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    for (let i = 0; i <= 200; i = i + 1){
      let x = 25 * (this.radCounter/(this.radCounter - a)) * cos(this.radCounter)
      let y = 25 * (this.radCounter/(this.radCounter - a)) * sin(this.radCounter)
      circle(x, y, 10)
      // console.log(x, y)
      this.radCounter = this.radCounter + (0.0001 + this.speed) * this.revers + this.revers
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = cos(this.counter/phaseLength)
  }
  
  
  
  
  spiralHelix(r, g, b, distance, speed, phaseLength){
    rotateX(PI/2)
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    this.counter2 = -windowHeight/2;
    for (let i = 0; i <= 200; i = i + 1){
      fill(r,g,b)
      let x = distance * cos(this.radCounter)
      let y = distance * sin(this.radCounter)
      let z = this.counter2
      this.distance3D = 0;
      for (let j = 0; j <= 10; j = j + 1){
        push()
        translate(x, y, z)
        fill(r - this.distance3D/5, g - this.distance3D/5, b - this.distance3D / 5)
        sphere(8 - this.distance3D / 100)
        pop()
      this.distance3D = this.distance3D + 75
      x = (distance + this.distance3D) * cos(this.radCounter)
      y = (distance + this.distance3D)* sin(this.radCounter) 
       }
      this.counter2 = this.counter2 + windowHeight/200
      // console.log(x, y)
      this.radCounter = this.radCounter + (0.01 + this.speed) * this.revers + this.revers
      
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = cos(this.counter/phaseLength)
  }
}



