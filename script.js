const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");

const generateColor = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 255);
   return `rgb(${r} ,${g} , ${b})`;
}

// copy Btn

// function forcopy btn
const copyColorCode = () => {
   const colorCodev = colorCode;
   const inputTag = document.createElement("input");
   document.body.appendChild(inputTag);
   inputTag.value = colorCodev.innerText;
   inputTag.select();
   document.execCommand("copy");
   document.body.removeChild(inputTag)
}

copyButton.addEventListener("click", () => {
   copyColorCode()
})

//  Function for  update Color;
const updateColor = () => {
   const color = generateColor();
   colorBox.style.backgroundColor = color;
   colorCode.innerText = color;
}

//  function  for update UI with color in box
const newColor = () => {
   updateColor();
}

generateColor();

//  console.log(generateColor());
