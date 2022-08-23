// combinando arrays com spread operator
const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = ['F40',...carros, 'Uno',...motos];
// [array1[0], array1[1], array1[2], array2[0], array2[1]];

// ============== =========================

//Combinando objetos

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
}

const pessoa = {
  nome: 'Nádia',
  idade: 28,
  cidade: 'BH'
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Corrida'
}
// ======= ========================

const numbers = [1, 2, 3];

const newArray = [4, 5, 6, ...numbers];

// ================= ===================

const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];

// ================ ======================

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
const patientInfo2 = [110, 1.88];

// console.log(imc(...patientInfo));
// console.log(imc(...patientInfo2));

// = = =  = = = = = = = = = = = = = = = = = = = = = = = 

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5