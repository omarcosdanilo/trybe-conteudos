// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [saudacao, saudacaoFunc] = saudacoes;

// saudacaoFunc(saudacao);

// ======================== ==============================

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [comida, animal, bebiba] = [bebida, comida, animal];

// // console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// ======================== ================================

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

//minha solução
// const [um, tres, cinco, seis, oito, dez, doze] = numerosPares;
// numerosPares = [seis, oito, dez, doze];

//solução gabarito
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

