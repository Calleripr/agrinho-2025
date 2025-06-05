function setup() {
  createCanvas(400, 400);
}

let Xjogador1 = 340;
let Xjogador2 = 340;
let Xjogador3 = 340;
let Xjogador4 = 340;

function draw() {
 ativaJogo();
 desenhaJogadores();
 desenhaLinhaDeChegada();
   
  
  if (Xjogador1 < 10) {
    fill("white")
    textSize(30);
    text("O campo venceu!",75,200);
    noLoop();
    
  }
 
  if (Xjogador2 < 10) {
   fill("white");
   textSize(30);
   text("O campo venceu!",75,200);
   noLoop();
   
 }
 if (Xjogador3 < 10) {
    fill("white")
    textSize(30);
    text("A cidade venceu!",75,200);
    noLoop();
    
  }
 if (Xjogador4 < 10) {
    fill("white")
    textSize(30);
    text("A cidade venceu!",75,200);
    noLoop();
    
  }
}
  function keyReleased() {
  if (key === 'a') {
  Xjogador1 += random(-30);
    
  }
  if (key == 's') {
    
  Xjogador2 += random(-30);
 
  }   
  if (key=== 'k') {
    
  Xjogador3 += random(-30);
     
  }
  
  if (key=== 'l') {
    
  Xjogador4 += random(-30)
    
  }
   
}

function ativaJogo(){
  if (focused==true){
  background("#5d3d36");
}    
  else{
  background("white")
  
  }
}

function desenhaJogadores(){
  textSize(50);
  text("🚜",Xjogador1 ,70);
  text("🏇",Xjogador2 ,170);
  text("🏎️",Xjogador3 ,270);
  text("🏍️",Xjogador4 ,350);
}

function desenhaLinhaDeChegada(){
  fill("black");
  rect(50,0,10,400);
  fill("yellow");
  for (let yAtual=0;yAtual < 400; yAtual += 20){
  rect(50, yAtual, 10, 10)
    
    
  }


}
