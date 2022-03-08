//get variables and set constant
const container = document.querySelector(".container");
const text = document.querySelector("#text");
const timing = document.querySelector("#timing");
const pointerContainer = document.querySelector("#pointer-container");
var btn = document.querySelector("#relaxer-btn");

//timing for relaxer
const cycleTime = 7500;
const breathTime = (cycleTime / 5) * 2;
const holdTime = cycleTime / 5;

//var music = document.getElementById("bg-music");
var bgMusic = document.querySelector("bg-music");
var music = new Audio("resource/music2.mp3");
var muteBtn = document.querySelector(".mute");

//initial display and listen for event
let musicPlay = true;
btn.addEventListener("click", startAnimation);
music.addEventListener("ended", musicControl);
muteBtn.addEventListener("click", mute);

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

//music switch
function musicControl() {
  console.log(musicPlay);
  if (!musicPlay) {
    music.pause();
  } else {
    music.play();
  }
}

//start the relaxer
function startAnimation() {
  musicControl();
  pointerContainer.className = "pointer-container rotate";
  btn.style.visibility = "hidden"; //hide the start button
  relaxerAnimation();
  setInterval(relaxerAnimation, cycleTime); //run the function "breathAnimation" in every 7 sec "cycletime"
}

//animation of relaxer (timing)
function relaxerAnimation() {
  text.innerHTML = "Breath in";
  timing.innerHTML = " 3 second";
  //allow this content to cover the old content in html file (in text)
  container.className = "container expand";

  //execute the time for next animation to start
  setTimeout(() => {
    //wait for 3 sec(breathTime) then change text
    text.innerHTML = "Hold";
    timing.innerHTML = holdTime / 1000 + " second";

    setTimeout(() => {
      //wait for 1.5 sec(holdTime) then change text
      text.innerHTML = "Breath out";
      container.className = "container shrink";
      timing.innerHTML = breathTime / 1000 + " second";
    }, holdTime);
  }, breathTime);
}
