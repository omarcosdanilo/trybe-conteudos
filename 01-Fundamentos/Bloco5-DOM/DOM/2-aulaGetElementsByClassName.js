// document.getElementsByClassName('piloto-f1-atual')[0].innerText = 'Marcos'

let pilotosDeF1 = document.getElementsByClassName('piloto-f1-atual');

for (let i = 0; i < pilotosDeF1.length; i += 1) {
  pilotosDeF1[i].innerText = 'Marcos Danilo';
}