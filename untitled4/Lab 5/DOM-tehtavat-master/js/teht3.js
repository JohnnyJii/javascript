const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

const ul = document.querySelector('ul');
let createli = '<li></li>';

  for (let i = 0; i < 4; i++) {
    createli = createli + '<li></li>';
  }

  ul.innerHTML = createli;

    for (let j = 1; j < 6; j++) {
      let li = document.querySelector('ul li:nth-child(' + j + ')');
        let addImg = '<img src=' + kuvat[j - 1] + '>';
      li.innerHTML = addImg;
    }