function getRandomColor() {
    // Generate random values for red, green, and blue components
    var r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    // Construct the RGB color string
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
  
    return color;
  }


 
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor()
})