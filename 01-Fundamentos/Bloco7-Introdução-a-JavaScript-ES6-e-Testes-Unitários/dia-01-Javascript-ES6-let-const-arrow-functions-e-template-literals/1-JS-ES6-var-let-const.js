// Na função abaixo se utilizar o var dentro do for essa variável pode ser acessada fora de loop, e isso é um problema. Ja se utilizar o let não é possível acessá-la fora do loop.

// function myFunction() {
//   for (var idade = 90; idade <= 100; idade += 1 ) {
//     console.log(idade);
//   }
//   console.log('Fora do for', idade);

 
// }

// ================= ======================
// myFunction();

// const estudante = {
//   nome: 'Marcos',
//   idade: 27,
// }
// console.log(estudante);

// estudante.nome = 'João';

// console.log(estudante);

// ====================== ===================
// var userName = 'Isabella';
// var userName = 'Lucas';
// console.log(userName);

// =================== ================
// const favoriteLanguage = 'Javascript';
// favoriteLanguage = 'Python';
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = 'Machine learning';
// favoriteTechnology = 'Facial recognition';
// console.log(favoriteTechnology); // Facial recognition

