/*const botaoSortear = document.querySelector('div.box button');

var numeroSorteado = document.querySelector('div.box h1');
var roleta = [];
var i = 1;

for(i = 1; i <= 60; i++){
roleta.push(i)
}

botaoSortear.addEventListener('click', () => {
numeroSorteado.innerHTML = roleta[Math.floor([Math.random() * roleta.length])];
});*/

function getRandomNumbers() {
  let numbers = [];

  while (numbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

document.getElementById('button').addEventListener('click', function() {
  let numbers = getRandomNumbers();
  document.getElementById('numbers').innerHTML = numbers.join(' ');
});

