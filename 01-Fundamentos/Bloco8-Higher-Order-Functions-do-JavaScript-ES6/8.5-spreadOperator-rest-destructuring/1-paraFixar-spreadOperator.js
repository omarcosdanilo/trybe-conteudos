// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'maçã', 'melão', 'banana', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'mel', 'granola'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));