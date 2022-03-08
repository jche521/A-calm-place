//set variables
var setTime = document.querySelector("#set-time");
var timeLeftDisplay = document.querySelector("#time-left");
var startBtn = document.querySelector("#start-btn");

//var music = document.getElementById("bg-music");
var bgMusic = document.querySelector("bg-music");
var music = new Audio("resource/music1.mp3");
var muteBtn = document.querySelector(".mute");

//listen to event when the music end
music.addEventListener("ended", musicControl);

//get user's input
var minute = getMinute();

//initial display and listen for event
timeLeftDisplay.innerHTML =
  (minute < 10 ? "0" : "") + //if number is one digit, add another 0 in front
  String(minute) + //change number to string
  ":" +
  "00";
let musicPlay = true;
startBtn.addEventListener("click", startTimer);
muteBtn.addEventListener("click", mute);

//ask for input for the timer
function getMinute() {
  do {
    var minute = prompt(
      "Please input number of minute you would like to relax",
      "2"
    );
    if (minute != null) {
      return minute;
    }
  } while (minute == null || minute == "");
}

//start the timer
function startTimer() {
  musicPlay = true;
  startBtn.disabled = true;
  musicControl();
  countdown(minute);
}

//music play or mute control
function mute() {
  if (musicPlay) {
    musicPlay = false;
    musicControl();
    muteBtn.className = "mute silence";
  } else {
    musicPlay = true;
    musicControl();
    muteBtn.className = "mute";
  }
}

//play music
function musicControl() {
  console.log(musicPlay);
  if (!musicPlay) {
    music.pause();
  } else {
    music.play();
  }
}

//function to countdown for timer
function countdown(minutes) {
  var seconds = 60; //initial value of second
  var mins = minutes;

  function tick() {
    //set variable
    var current_minutes = mins - 1;
    seconds--; //count down by one second
    timeLeftDisplay.innerHTML =
      (current_minutes < 10 ? "0" : "") + //if number is one digit, add another 0 in front
      String(current_minutes) + //change number to string
      ":" +
      (seconds < 10 ? "0" : "") +
      String(seconds);

    //count down if second does not equal to zero
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      //if second equals to zero but there is minute left, repeat the whole process again
      if (mins > 1) {
        countdown(mins - 1);
      } else {
        //if finish counting, stop the music, activate the start buttonS
        musicPlay = false;
        musicControl();
        startBtn.disabled = false;
        startBtn.innerHTML = "repeat";
      }
    }
  }
  tick();
}
