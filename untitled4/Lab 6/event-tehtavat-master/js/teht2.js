document.getElementById('kuva').onmouseover = function() {
  mouseOver();
};
document.getElementById('kuva').onmouseout = function() {
  mouseOut();
};

function mouseOver() {
  document.querySelector('p').style = 'display: block;';
}

function mouseOut() {
  document.querySelector('p').style = 'display:none;';
}
