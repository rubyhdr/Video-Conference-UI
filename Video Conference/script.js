//NavBar
const container = document.querySelector(".container");

// document.querySelector(".open-navbar-icon").addEventListener("click", () => {
//   container.classList.add("change");
// });

// document.querySelector(".close-navbar-icon").addEventListener("click", () => {
//   container.classList.remove("change");
// });

const colors = ["#5433FF", "#4379FF", "#1CC6FF", "#97FBD1", "#F6A4EC"];

let i = 0;

// Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
//   item.style.cssText = `background-color: ${colors[i++]}`;
// });

// Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
//   item.onclick = () => {
//     item.parentElement.parentElement.classList.toggle("change");
//   };
// });
// //End of NavBar









'use strict';
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('span');
const errorMsgElement = document.getElementById('spanErrorMsg');

const constraints = {

  audio: true,
  video: {
    width: 1280, height: 720
  }
};

// Access Webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  }
  catch (e) {
    errorMsgElement.innerHTML = 'navigator.getUserMedia.error:${e.toString()}';
  }
}


// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

// Load init
init();

// Draw Image
var context = canvas.getContext('2d');
snap.addEventListener("click", function () {
  context.drawImage(video, 0, 0, 640, 480);
});