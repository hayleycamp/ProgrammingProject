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
  
  spiralArch(r, g, b, distance, phaseLength, diameterCircle){
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    for (let i = 0; i <= 800; i = i + 1){
      let x = (0.1 * (sqrt(4 + distance/4)) * this.radCounter) * cos(this.radCounter)
      let y = (0.1 * (sqrt(4 + distance/4)) * this.radCounter) * sin(this.radCounter)
      circle(x, y, diameterCircle)
      // console.log(x, y)
      this.radCounter = this.radCounter + 5 * this.revers
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = cos(this.counter/(phaseLength * 8))
  }
  
  spiralLog(r, g, b, distance, phaseLength, diameterCircle){
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    for (let i = 0; i <= 200; i = i + 1){
      let x = (distance * exp(0.1 * this.radCounter)) * cos(this.radCounter)
      let y = (distance * exp(0.1 * this.radCounter)) * sin(this.radCounter)
      circle(x, y, diameterCircle/1.1)
      // console.log(x, y)
      this.radCounter = this.radCounter + this.revers
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = abs(cos(0.5 * this.counter/phaseLength))
  }
  
  
   spiralAtomic(r, g, b, a, phaseLength, diameterCircle){
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    for (let i = 0; i <= 200; i = i + 1){
      let x = (35 + a/15) * (this.radCounter/(this.radCounter - a)) * cos(this.radCounter)
      let y = (35 + a/15) * (this.radCounter/(this.radCounter - a)) * sin(this.radCounter)
      circle(x, y, diameterCircle)
      // console.log(x, y)
      this.radCounter = this.radCounter + 5 * this.revers
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = 0.5 + 0.5 * cos(this.counter/phaseLength)
  }
  
  
  
  
  spiralHelix(r, g, b, distance, phaseLength, diameterCircle){
    rotateX(PI/3)
    fill(r,g,b)
    noStroke()
    this.radCounter = 0;
    this.counter2 = -windowHeight/2 - 200;
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
        sphere(diameterCircle - this.distance3D / 130)
        pop()
      this.distance3D = this.distance3D + 75
      x = (distance + this.distance3D) * cos(this.radCounter)
      y = (distance + this.distance3D)* sin(this.radCounter) 
       }
      this.counter2 = this.counter2 + windowHeight/100
      // console.log(x, y)
      this.radCounter = this.radCounter + 10 * this.revers
      
      
      //console.log(this.radCounter)
      
    }
  
    this.counter = this.counter + 1;
    //console.log(this.counter)
    
    this.revers = cos(this.counter/(8 * phaseLength))
  }
}