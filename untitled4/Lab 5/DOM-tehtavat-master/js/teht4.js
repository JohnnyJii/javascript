const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

const ul = document.querySelector('ul');

for (let i = 0; i < 4; i++) {
  const createli = document.createElement('li');
  const image = document.createElement('img');
  image.src= kuvat[i];
  createli.appendChild(image);
  ul.appendChild(createli);
}