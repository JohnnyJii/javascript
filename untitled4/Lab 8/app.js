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

const nappi = document.getElementById('nappi');
nappi.addEventListener('click', etsi);
