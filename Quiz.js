class Quiz {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  play(){
    question.hide();
    textSize(30);
    text("GAME START",120,100);
    Contestant.GetPinfo();
    if(allContestant !== undefined){
      var Bpos=130;
      if(contestant.index){
        fill("red");
      }
      else{
        fill("blue");
      }
      Bpos+=20;
      textSize(15);
      text(allContestant.name+" : "+allContestant.distance, 120, Bpos);
    }
  }
  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountref=await database.ref("contestantCount").once("value");
      if(contestantCountref.exists()){
        contestantCount=contestantCountref.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
}