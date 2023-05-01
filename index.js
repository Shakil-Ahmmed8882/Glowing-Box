const buttons = document.querySelectorAll("button");
const boxRed = document.querySelectorAll(".box")[0];
const boxPurple = document.querySelectorAll(".box")[1];
const boxBlue = document.querySelectorAll(".box")[2];
const boxGreen = document.querySelectorAll(".box")[3];
const boxOrange = document.querySelectorAll(".box")[4];

function removeAllGlowClasses() {
  boxRed.classList.remove("glowRed");
  boxPurple.classList.remove("glowPurple");
  boxBlue.classList.remove("glowBlue");
  boxGreen.classList.remove("glowGreen");
  boxOrange.classList.remove("glowOrange");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var btn = window.getComputedStyle(buttons[i]);
    btn = btn.backgroundColor;
    console.log(btn);
    if (btn === "rgb(255, 0, 0)") {
      if (boxRed.classList.contains("glowRed")) {
        boxRed.classList.remove("glowRed");
      } else {
        removeAllGlowClasses();
        boxRed.classList.add("glowRed");
      }
    } else if (btn === "rgb(112, 48, 160)") {
      if (boxPurple.classList.contains("glowPurple")) {
        boxPurple.classList.remove("glowPurple");
      } else {
        removeAllGlowClasses();
        boxPurple.classList.add("glowPurple");
      }
    } else if (btn === "rgb(0, 112, 192)") {
      if (boxBlue.classList.contains("glowBlue")) {
        boxBlue.classList.remove("glowBlue");
      } else {
        removeAllGlowClasses();
        boxBlue.classList.add("glowBlue");
      }
    } else if (btn === "rgb(146, 208, 80)") {
      if (boxGreen.classList.contains("glowGreen")) {
        boxGreen.classList.remove("glowGreen");
      } else {
        removeAllGlowClasses();
        boxGreen.classList.add("glowGreen");
      }
    } else if (btn === "rgb(255, 192, 0)") {
      if (boxOrange.classList.contains("glowOrange")) {
        boxOrange.classList.remove("glowOrange");
      } else {
        removeAllGlowClasses();
        boxOrange.classList.add("glowOrange");
      }
    }
  });
}
// const buttons = document.querySelectorAll("button");
// const box = document.querySelectorAll(".box");

// for (let i = 0; i <buttons.length; i++) {
//  [i].addEventListener("click", function () {
//     const btn = window.getComputedStyle(buttons[i]).backgroundColor;
//     const box = getBoxByColor(btn);

//     if (box.classList.contains(`glow${box.dataset.color}`)) {
//       box.classList.remove(`glow${box.dataset.color}`);
//     } else {
//       box.classList.add(`glow${box.dataset.color}`);
//     }
//   });
// }

// function getBoxByColor(color) {
//   const boxColors = {
//     "rgb(255, 0, 0)": "Red",
//     "rgb(112 48, 160)": "Purple",
//     "rgb(0, 112, 192)": "Blue",
//     "rgb(146, 208, 80)": "Green",
//     "rgb(255, 192, 0)": "Orange"
//   };

//   const boxColor = boxColors[color];
//   return Array.from(boxes).find(box => {
//     return box.dataset.color === boxColor;
//   });
// }
