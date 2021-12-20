
// $("h1").css("color","red");
// var buttonColours=["red", "blue", "green", "yellow"];
// var gamePattern=[];
// var userClickedPattern=[];
// var level=0;
// var v=false;
//
// $(document).keypress(function(){
//   if(!v){
//     $("#level-title").text("Level "+level);
//     nextSequence();
//     v=true;
//   }
// });
//
// $(".btn").click(function(){
//   var userChosenColor= $(this).attr("id");
//   userClickedPattern.push(userChosenColor);
//
//   playSound(userChosenColor);
//   animatePress(userChosenColor);
//   checkAnswer(userClickedPattern.length-1);
//
// });
//
// function checkAnswer(currentLevel){
//   if(userClickedPattern[currentLevel]!==gamePattern[currentLevel]){
//      $("#level-title").text("Game Over, Press Any Key to Restart");
//      playSound("wrong");
//      $("body").addClass("game-over");
//      setTimeout(function(){
//                $("body").removeClass("game-over");
//        }, 200);
//        startOver();
//   }else{
//     if(userClickedPattern.length === gamePattern.length){
//       setTimeout(function(){
//                 nextSequence();
//         }, 1000);
//     }
//   }
// }
//
// function nextSequence(){
//   userClickedPattern=[];
//   level++;
//   $("#level-title").text("Level "+level);
//   var randomNumber=Math.floor(Math.random()*4);
//   var randomChosenColour= buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   $("#"+ randomChosenColour").fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
//
// }
//
// function playSound(name){
//   var sound=new Audio("sounds\" + name + ".mp3");
//   sound.play();
// }
//
// function animatePress(currentColor){
//   $("#"+currentColor).addClass("pressed");
//   setTimeout(function(){
//             $("#"+currentColor).removeClass("pressed");
//     }, 100);
// }
//
//
//
// function startOver(){
//   level=0;
//   v=false;
//   gamepattern=[];
// }


var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var start = false;

$(document).keypress(function(){
  if(!start){
    $("#level-title").text("Level " + level);
    nextSequence();
    start=true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){

  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){

    if(gamePattern.length==userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }

  }else{

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

   $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();

  }
}

function playSound(name){
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100);
}


function startOver(){
  level=0;
  gamePattern=[];
  start=false;
}
