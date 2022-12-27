const botaoSortear = document.querySelector('div.box button');

var numeroSorteado = document.querySelector('div.box h1');
var roleta = [];
var i = 1;

for(i = 1; i <= 60; i++){
roleta.push(i)
}

botaoSortear.addEventListener('click', () => {
numeroSorteado.innerHTML = roleta[Math.floor([Math.random() * roleta.length])];
});

//var sorteados = [];

//function sorteio() {
 // return Math.floor(Math.random() * 60);
//}

//while (sorteados.length < 6) {
 // var resultado = sorteio();
//  if (sorteados.indexOf(resultado) === -1) {
 //   sorteados.push(resultado);
 // }
  //resultado.innerHtml;
  //console.log(resultado);
//}
