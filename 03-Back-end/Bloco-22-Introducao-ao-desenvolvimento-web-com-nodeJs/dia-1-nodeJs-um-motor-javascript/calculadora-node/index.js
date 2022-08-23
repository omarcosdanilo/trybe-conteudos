const {sum, sub, div, mult} = require('./operacoes')
const readLine = require('readline-sync');

console.log('Calculadora Simples');

const num1 = readLine.questionInt('Digite um número ');
const oper = readLine.question('Digite a operação desejada: {+, -, /, *} ')
const num2 = readLine.questionInt('Digite um número ');

switch(oper) {
  case '+':
    sum(num1, num2)
    break;
  case '-':
    sub(num1, num2)
    break;
  case '/':
    div(num1, num2)
    break;
  case '*':
    mult(num1, num2)
    break;
  default:
    console.log('Operação inválida');
}