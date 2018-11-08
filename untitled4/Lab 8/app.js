const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.tvmaze.com/search/shows?q=girls', false);
xhr.onreadystatechange = showImage;
xhr.send(null);

function showImage() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.querySelector('img').src = xhr.responseText;
  }
}


const button = document.getElementById('hakunappi');
button.addEventListener('click', haku);


fetch('http://api.tvmaze.com/search/shows?q=hakuteksti')
    .then(function(vastaus) {
      return vastaus.json();
    }).then(function(json) {
      vastaus(json);
    }).catch(function(error) {
      document.write(error);
  });


function haku() {
  const vastaus = document.querySelector('haku').value;
  const hakuLinkki = "http://api.tvmaze.com/search/shows?q=";
  const linkit = document.getElementById('hakuteksti').value;

  document.querySelector(vastaus).innerText = tulos;
  document.querySelector(hakuLinkki).src = lähde;
  document.querySelector(linkit).src = ehdot;
}

