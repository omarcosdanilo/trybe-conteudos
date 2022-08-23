function calcularDivisao (num1, num2) {
  if(num2 === 0) throw new Error('Não pode ser feito divisão por 0')

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 2);
  console.log(resultado);
} catch(err) {
  console.log('Erro: %s', err.message);
}
  