//first
const conteinerGetElementById = document.getElementById('container');

const containerQuerySelecor = document.querySelector('#container');

//second
const secondLi = document.querySelectorAll('li.second');

//third
const thirdLi = document.querySelectorAll('ol > li.third');

//fourth
const header = document.querySelector('.header');
header.innerHTML = 'Hello';

//fifth
const elem = document.querySelector('.footer');
elem.classList.add('main');
elem.classList.remove('main');

//sixth
const li = document.createElement('li');
li.innerHTML = 'four';

//seventh
const ul = document.querySelector('ul');
ul.append(li);

//eighth
const greenLi = document.querySelectorAll('ol > li');
for( let i = 0; i < greenLi.length; i++)
greenLi[i].style.backgroundColor = 'green';

//ninth
const divFooter = document.querySelector('div.footer');
divFooter.remove();