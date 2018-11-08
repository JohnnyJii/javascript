document.getElementById('kuva').addEventListener('mouseover',  mouseOver);
document.getElementById('kuva').addEventListener('onmouseout', mouseOut);

function mouseOver() {
  document.querySelector('p').style.display = 'block';
}

function mouseOut() {
  document.querySelector('p').style = 'display:none;';
}
