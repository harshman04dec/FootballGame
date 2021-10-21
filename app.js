// alert("Hello")
var blueArea = document.getElementsByClassName("firstQuadrant");
var football = document.getElementById("myImg");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var firstName = document.getElementById("firstName");
var firstScore = document.getElementById("firstScore");
var secondName = document.getElementsByClassName("secondName")[0]
var secondScore = document.getElementById("secondScore");
var thirdName = document.getElementsByClassName("thirdName")[0]
var thirdScore = document.getElementById("thirdScore");
var name = "firstName";
// This is the default value of player name, it gets updated when you click on a player's image.
var score = "firstScore";
// Same as the name variable
var firstGoals =0;
var secondGoals =0;
var thirdGoals=0;
// These are used to update the scores
function setFootballPos(){
    let width = blueArea[0].offsetWidth;
    width = width /2 -50;
    // alert("mic check");
    football.style.transform = "translate3d("+width+"px, 8px, 0)";
}
// This is the function I call as soon as the page loads, it centres the ball with an animation.
function changeName(){
    document.getElementsByClassName(name)[0].innerText = document.getElementById("playerName").value;
    // alert(score);
    // alert(name);
    // This is used to change name of the character through the form which appears when you double click on a player.
    // name is a variable which wil store the class name of the chosen player. 
}
function changeScore(x){
    document.getElementsByClassName(score)[0].innerText = x;
    // alert(score);
    // We pass the value of the score when someone scores a goal. The personw who is currently selected will get his score updated
}
var counter = 1;
football.addEventListener("click",function(){
   counter ++;
   if(counter<6)
    football.height = 50*counter;
    else
    {
    counter = 1;
    football.height = 50*counter;
}
})
// This is used to increase the size of the football, and it gets to it's default size after 5 clicks. I used a counter. 
    player1.addEventListener("click",function(){
        score = "firstScore";
        // This is where I give the class name of the first player so I can change the score card. 
        console.log(event.clientX);
  player1.style.background = "yellow";
  firstName.style.background = "yellow";
  firstScore.style.background = "yellow";
  player2.style.background = "green";
  secondName.style.background = "red";
  secondScore.style.background = "red";
  player3.style.background = "green";
  thirdName.style.background = "red";
  thirdScore.style.background = "red";
   }
 )
//  This is to give the chosed player a yellow background, and to turn the other chosen characters background to white.
 player1.addEventListener("dblclick",function(){
     name = "firstName";
    document.getElementsByClassName('formElement')[0].style.display = 'block';
 })
//  This is to make the form visible on dbl click.
 player2.addEventListener("click",function(){
     score = "secondScore";
    
    player2.style.background = "yellow";
    secondName.style.background = "yellow";
    secondScore.style.background = "yellow";
    player1.style.background = "green";
    firstName.style.background = "red";
    firstScore.style.background = "red";
    player3.style.background = "green";
    thirdName.style.background = "red";
    thirdScore.style.background = "red";
   
     }
   )
   player2.addEventListener("dblclick",function(){
    name = "secondName";
   document.getElementsByClassName('formElement')[0].style.display = 'block';
})
// same as above just with different names, I could have found a more efficient way but didn't have enough time.
   player3.addEventListener("click",function(){
       score = "thirdScore";
     
    player3.style.background = "yellow";
    thirdName.style.background = "yellow";
    thirdScore.style.background = "yellow";
    player1.style.background = "green";
    firstName.style.background = "red";
    firstScore.style.background = "red";
    player2.style.background = "green";
    secondName.style.background = "red";
    secondScore.style.background = "red";
     }
   )
   player3.addEventListener("dblclick",function(){
    name = "thirdName";
   document.getElementsByClassName('formElement')[0].style.display = 'block';
})

blueArea[0].addEventListener("click",function(){
var xpos = event.clientX-40;
var ypos = event.clientY - 300;
var Rxpos = event.clientX;
var Rypos = event.clientY;
let width = blueArea[0].offsetWidth;
let height = blueArea[0].offsetHeight;
// This is wehre I get the co ordinates of the click, so I can send the ball towards that position.
console.log(width, height);
console.log(Rxpos, Rypos);

 if(Rxpos>width/2-80 && Rxpos<width/2+110 && Rypos>height - 100 && Rypos<height+30){
    //  Here I am corecting the offset because the goal post wil always be the same size, and Rxpos and Yxpos are what change.
    //  alert("Goal");
    if(score == "firstScore"){
        firstGoals++;
        changeScore(firstGoals);
    }
    else  if(score == "secondScore"){
        secondGoals++;
        changeScore(secondGoals);
    }
    else  if(score == "thirdScore"){
        thirdGoals++;
        changeScore(thirdGoals);
    }
    // I award the point to the selected player using if else statement.
    //  changeScore(10);
 }
var Valtranslate3d = "translate3d("+xpos+"px, " +ypos+"px, 0)";
 football.style.transform = Valtranslate3d;
// This is the logic of how I am senditnd datat to the style sheet using DOM, and I am passing the co-ordinates of the click.
 setTimeout(function(){
    football.style.transform = "translate3d("+width/2+"px, 8px, 0)";
 },500); 
//  Timeout is used to get the ball back at it's original position after half a second of the click.
 
 console.log(Valtranslate3d);
})

window.addEventListener("keydown", function(event) {
    var xpos = event.clientX-40;
    var ypos = event.clientY - 300;
    // var Rxpos = event.clientX;
    // var Rypos = event.clientY;
    let width = blueArea[0].offsetWidth;
    let height = blueArea[0].offsetHeight;
    var x_axis = 8;
    if (event.code === "ArrowDown"){
        // Handle "down"
        alert(x_axis);
        x_axis =x_axis+30;
        
        var Valtranslate3d = "translate3d("+width/2+"px, "+x_axis+"px, 0)";
        football.style.transform = Valtranslate3d;


 
        
    } else if (event.code === "ArrowUp"){
        alert(x_axis);
        // Handle "up"
        x_axis =x_axis-30;

        var Valtranslate3d = "translate3d("+width/2+"px, "+x_axis+"px, 0)";
        football.style.transform = Valtranslate3d;
        
    } else if (event.code === "ArrowLeft"){
        width +=60;
        var Valtranslate3d = "translate3d("+width/2+"px, "+x_axis+"px, 0)";
        football.style.transform = Valtranslate3d;
        
    } else if (event.code === "ArrowRight"){
        // Handle "right"
        width -=60;
        var Valtranslate3d = "translate3d("+width/2+"px, "+x_axis+"px, 0)";
        football.style.transform = Valtranslate3d;
        
       
    }

  }, true);
//   this is the logic of how to move the ball using keyboard, I need to work more on it.