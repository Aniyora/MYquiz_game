var canva;
var quiz,question,contestant;
var database;
var gameState=0;
var contestantCount;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4){
    game.update(1);
  }
  if(gameState==0){
    clear();
    game.play();
  }
}

  

