 const colorBox = document.getElementById("colorBox");
 const colorCode  = document.getElementById("colorCode") ;
 const copyButton  = document.getElementById("copyButton");

 const generateColor = () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r} ,${g} , ${b} )`;    
 }

 //  Function for  update Color;

 const updateColor = () =>{
    const color = generateColor();
    colorBox.style.backgroundColor = color;
    colorCode.innerText = color
 }

//  Function for  show  Color code;
copyButton.addEventListener("click" , () =>{
    
})
updateColor()
 generateColor()
//  console.log(generateColor());
 