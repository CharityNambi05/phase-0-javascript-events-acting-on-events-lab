// Your code hereconst DODGER 


const DODGER = document.getElementById('DODGER');

function moveDodgerLeft() {
  const currentLeft = parseInt(DODGER.style.left) || 0;
  const newLeft = Math.max(0, currentLeft - 10); 
  DODGER.style.left = `${newLeft}px`;
}

function moveDodgerRight() {
  const currentLeft = parseInt(DODGER.style.left) || 0;
  const newLeft = Math.min(window.innerWidth - DODGER.offsetWidth, currentLeft + 10); 
  DODGER.style.left = `${newLeft}px`;
}
