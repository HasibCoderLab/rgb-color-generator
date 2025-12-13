 const colorBox = document.getElementById("colorBox");
 const colorCode  = document.getElementById("colorCode") ;
 const copyButton  = document.getElementById("copyButton");

 const generateColor = () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*255);
    return `rgb (${r} ,${g} , ${b} )`;    
 }

 console.log(generateColor());
 