class Quiz {
  constructor(){
   
  }

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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
     setBackground("Yellow;")
    //write code to show a heading for showing the result of Quiz
    
    textSize(30);
    text(" Results of the quiz", 120, 100)
    //call getContestantInfo( ) here
    if(allContestents !== undefined){
      textSize(30);
      text(" Contest who answer correct are in green", 120, 100)

      var display_answers=230;

      for(var plr in allContestents){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
        fill("Green")
        else
        fill("red")

        display_answers+=30;
        textSize(20);
        text(allContestants[plr].name + ":" + allComtestants[plr].answer,250,display_answers)
      }
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
