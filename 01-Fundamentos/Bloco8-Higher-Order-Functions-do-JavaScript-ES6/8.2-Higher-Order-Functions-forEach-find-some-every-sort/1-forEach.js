// const listaDePessoasAprovas = [
//   'Marcos',
//   'Mariana',
//   'João',
//   'Matheus',
//   'Felipe',
// ]

// const enviarEmail = (email) => {
//   console.log(`Email para ${email} foi enviado com sucesso`);
// }

// listaDePessoasAprovas.forEach((item, index, array) => {
//   enviarEmail(item);
//   console.log(`Sua posição é a de: ${index}`)
//   console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}
//   `)
// });

// ============= ================================= ===================

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// ===============  ========================================= ===========

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);