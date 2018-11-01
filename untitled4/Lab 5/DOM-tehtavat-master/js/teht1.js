document.getElementsByTagName('td')[0].innerHTML = 'Jukka';
document.getElementsByTagName('td')[1].innerHTML = 'Juntunen';
document.getElementsByTagName('td')[2].innerHTML = 'Johnny';
document.getElementsByTagName('td')[3].innerHTML = 'Saunalahdenkatu, 02330 Espoo';

const tr1 = document.querySelector('tr:first-child');
const th = document.createElement('th');
const p = document.createTextNode('Puhelinro: ');
th.appendChild(p);
tr1.appendChild(th);

const tr2 = document.querySelector('tr:last-child');
const td =document.createElement('td');
const p2 = document.createTextNode('0401640060');
td.appendChild(p2);
tr2.appendChild(td);

let parent = document.getElementsByTagName('tr');
let node = document.getElementsByTagName('th')[2];
parent[0].removeChild(node);

let node2 = document.getElementsByTagName('td')[2];
parent[1].removeChild(node2);

