const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const generateColorBtn = document.getElementById("generateColorBtn");

const generateColor = () => {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 255);
   return `rgb(${r} ,${g} , ${b})`;
}

// copy Btn

// function forcopy btn
const copyColorCode = async () => {
   const text = colorCode.innerText;
   await navigator.clipboard.writeText(text);
};


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

generateColorBtn.addEventListener("click",newColor)
generateColor();

 console.log(generateColor());
