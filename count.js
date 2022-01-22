var numbers = document.querySelector('#field');
var comments = document.querySelector('#comment');
var numbersReverse = document.querySelector('#fieldReverse');
var commentsReverse = document.querySelector('#commentReverse');
var start;
var startReverse;
var count = 1;
var countReverse = 30;

function StartTimeFunc() { 
  start = setInterval(function(){
    numbers.innerHTML = count;
    comments.innerHTML = "";
    if(count < 30){
      count++;
    } else {
      clearInterval(start);
      comments.innerHTML = "Finish, limit is " + count;
    }
  }, 1000); 

  startReverse = setInterval(function(){
    numbersReverse.innerHTML = countReverse;
    commentsReverse.innerHTML = "";
    if(countReverse > 0){
      countReverse--;      
    } else  {
      clearInterval(startReverse);
      commentsReverse.innerHTML = "Finish, limit is " + countReverse;
    }
  }, 1000); 
}

StartTimeFunc();



function StopTimeFunc() {
  clearInterval(start);
  comments.innerHTML = "On Pause";

  clearInterval(startReverse);
  commentsReverse.innerHTML = "On Pause";
}

function ClearTimeFunc() {
  clearInterval(start);
  numbers.innerHTML = "";
  count = 1;
  comments.innerHTML = "Numbers are clear";

  clearInterval(startReverse);
  numbersReverse.innerHTML = "";
  countReverse = 30;
  commentsReverse.innerHTML = "Numbers are clear";
}

function RestartTimeFunc() {
  clearInterval(start);
  numbers.innerHTML = "";
  count = 1;
  comments.innerHTML = "Restart";
 

  clearInterval(startReverse);
  numbersReverse.innerHTML = "";
  countReverse = 30;
  commentsReverse.innerHTML = "Restart";

  StartTimeFunc();
}

