var mode = 0;
var disp = 0;
var speed = 0.001
var yes = 0
let sliderR;
let sliderG;
let sliderB;
let sliderPhaseLength;
let sliderDiameter;
let sliderDiameterCircle;
let myMenu;
let menu = 1 ;
let textR;
let textG;
let textB;
let textSpeed;
let textZoom;
let textSizeDots;
let font;
let rectangle;
let button;
let colorOn;
let colorOff;
let counter = 0;
let r
let g
let b
let wrapper1
let wrapper2
let on = -1;
let textColorswitch

  
function preload(){
    font = loadFont('GoogleSans.ttf')
  }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  splash = new Splash();
  
  osc = new p5.Oscillator('sine')
  osc.amp(0);
  osc.start()
  
  spiral = new Spiral()
  sliderR = createSlider(0, 255, 0, 1)
  sliderR.position(60, 20)
  sliderR.size(80)
  sliderR.hide()
  sliderG = createSlider(0, 255, 0, 1)
  sliderG.position(60, 40)
  sliderG.size(80)
  sliderG.hide()
  sliderB = createSlider(0, 255, 0, 1)
  sliderB.position(60, 60)
  sliderB.size(80)
  sliderB.value(160)
  sliderB.hide()
  sliderPhaseLength = createSlider(1, 10, 0, 0.01)
  sliderPhaseLength.position(60, 80)
  sliderPhaseLength.size(80)
  sliderPhaseLength.value(2)
  sliderPhaseLength.hide()
  sliderDiameter = createSlider(1, 200, 0, 0.5)
  sliderDiameter.position(60, 100)
  sliderDiameter.size(80)
  sliderDiameter.value(50)
  sliderDiameter.hide()
  sliderDiameterCircle = createSlider(1, 20, 0, 0.5)
  sliderDiameterCircle.position(60, 120)
  sliderDiameterCircle.size(80)
  sliderDiameterCircle.value(7)
  sliderDiameterCircle.hide()
  
  wrapper1 = createDiv()
  wrapper2 = createDiv()
  
  myMenu = createRadio(wrapper1)
  myMenu.position(10, 175)
  myMenu.size(120, 90)
  myMenu.style('font-family', 'Arial')
  myMenu.style('font-size', '15px')
  myMenu.option('Archimedes<p>')
  myMenu.option('Logarithmic<p>')
  myMenu.option('Atomic<p>')
  myMenu.option('Helix<p>')
  myMenu.selected('Archimedes<p>')
  myMenu.hide()
  
  colorOff = createButton('Off')
  colorOff.position(100, 146)
  colorOff.mousePressed(colorswitch)
  colorOff.hide()
  
  colorOn = createButton('On')
  colorOn.position(100, 146)
  colorOn.mousePressed(colorswitch)
  colorOn.hide()
  
  button = createButton('close')
  button.position(120, 290)
  button.mousePressed(menuDisappear)
  button.hide()
  
  textFont(font)
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
    
    if (menu == 1){
    noStroke()
    fill(200)
    rectangle = rect(-windowWidth/2, -windowHeight/2, 180, 320)
    fill(0)
    textSize(13)
    textFont(font)
    textR = text('Red', -windowWidth/2 + 10, -windowHeight/2 + 33)
    textG = text('Green', -windowWidth/2 + 10, -windowHeight/2 + 53)
    textB = text('Blue', -windowWidth/2 + 10, -windowHeight/2 + 73)
    textSpeed = text('Speed', -windowWidth/2 + 10, -windowHeight/2 + 93)
    textZoom = text('Zoom', -windowWidth/2 + 10, -windowHeight/2 + 113)
    textSizeDot = text('Dot Size', -windowWidth/2 + 10, -windowHeight/2 + 133)
    textColorswitch = text('Colorshift', -windowWidth/2 + 20, -windowHeight/2 + 161)
    sliderR.show()
    sliderG.show()
    sliderB.show()
    sliderPhaseLength.show()
    sliderDiameter.show()
    sliderDiameterCircle.show()
    myMenu.show()
    button.show()
      
    if (on == -1) {
      r = sliderR.value()
      g = sliderG.value()
      b = sliderB.value()
      colorOff.show()
      colorOn.hide()
  
    }
    if (on == 1){
      r = 200 * sin(counter/700) + 10
      g = 200 * sin(counter/700 + PI/2) + 10
      b = 200 * sin(counter/700 + PI) + 10
      colorOn.show()
      colorOff.hide()
      sliderR.hide()
      sliderG.hide()
      sliderB.hide()
    }
    
    }
    
    
    yes = 1
    counter = counter + 1;
    
    
    if (menu == 1){
      beginClip({invert: true});
      rect(-windowWidth/2, -windowHeight/2, 180, 320)
      console.log(menu)
      endClip()
    }
    
    if (yes == 1){
      if (myMenu.value() == 'Archimedes<p>'){
       spiral.spiralArch(r, g, b, sliderDiameter.value(), 6000/sliderPhaseLength.value(), sliderDiameterCircle.value())
      }
      
      if (myMenu.value() == 'Logarithmic<p>'){
       spiral.spiralLog(r, g, b, sliderDiameter.value(), 6000/sliderPhaseLength.value(), sliderDiameterCircle.value())
      }
      
      if (myMenu.value() == 'Atomic<p>'){
       spiral.spiralAtomic(r, g, b, sliderDiameter.value(), 6000/sliderPhaseLength.value(), sliderDiameterCircle.value())
      }
      
      if (myMenu.value() == 'Helix<p>'){
       spiral.spiralHelix(r, g, b, sliderDiameter.value(), 6000/sliderPhaseLength.value(), sliderDiameterCircle.value())
      }
    }
}
}


function menuDisappear(){
    menu = 0;
    sliderR.hide()
    sliderG.hide()
    sliderB.hide()
    sliderPhaseLength.hide()
    sliderDiameter.hide()
    sliderDiameterCircle.hide()
    myMenu.hide() 
    colorOn.hide()
    colorOff.hide()
    button.hide()
  
}

function keyPressed(){
  if (keyCode === 32){
    menu = 1;
  }
  return false
}

function colorswitch(){
  on = on * -1
}

function mouseClicked(){
  let array = get(mouseX, mouseY);
  if (menu == 1 && mouseX <= 180 && mouseY <= 300){
  }
  else{
  osc.freq(2 * (2 * array[0] + 4 * array[1] + array[2]) + random(0, 50))
  osc.amp(0.3, 0.05)
  osc.amp(0, 0.2, 0.1)
  console.log("sound")
  }
  console.log(mouseX, mouseY)
}



