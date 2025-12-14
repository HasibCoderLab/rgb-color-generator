const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const generateColorBtn = document.getElementById("generateColorBtn");
const popup = document.getElementById("successPopup")

// generateColor RGB Color
const generateColor = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 255);
   return `rgb(${r} ,${g} , ${b})`;
}

//  Update  Created Color
const updateColor = () => {
   const color = generateColor();
   colorBox.style.backgroundColor = color;
   colorCode.innerText = color;
}

//  copy color code and shoe popUp
const copyColorCode = () => {
   const text = colorCode.innerText;
   navigator.clipboard.writeText(text).then(() => {
      const btnIcon = document.querySelector("i");

      // show icon
      btnIcon.className = "fa-solid fa-check";

      // Show Popup
      popup.classList.add("show");

      setTimeout(() => {
         popup.classList.remove("show");
         btnIcon.className = "fa-solid fa-copy";
      }, 2000);
   });
};
//         ========= EventListeners======
generateColorBtn.addEventListener("click", updateColor);
copyButton.addEventListener("click", copyColorCode);
document.addEventListener("DOMContentLoaded", updateColor);
