const nappi = document.getElementById('nappi');
nappi.addEventListener('click', etsi);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button-up").style.display = "block";
  } else {
    document.getElementById("button-up").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function etsi () {
  const haku = document.getElementById('haku').value
  fetch(`https://api.tvmaze.com/search/shows?q=${haku}`)
  .then(vastaus => vastaus.json())
  .then(series => {
    console.log(series);
    const app = document.getElementById('app');
    app.innerHTML = series.map(({show}) => `
            <div class="movies2 col" >
            ${show.image ? `<img src="${show.image.medium}">` : ''}
            <div >
               <h5 >${show.name}</h5>
                    <h7>${show.url}</h7>
                    <h7>${show.genres}</h7>
                    <h7>${show.summary}</h7>
               </div>
               </div>
               
             `).join('');
  })
}



