const botaoSortear = document.querySelector('div.box button');

var numeroSorteado = document.querySelector('div.box h1');
var roleta = [];

for (i = 0; i <= 60; i++){
 roleta.push(i)}

botaoSortear.addEventListener('click', () => {
  numeroSorteado.innerHTML = 'o numero sorteado é: ';
});
