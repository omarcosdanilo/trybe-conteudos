const person = {
  name: 'Ricardo',
  lastName: 'Silva',

  greet: (greetingFunction, nome) => {
    const greetingMessage = greetingFunction(nome);
    return greetingMessage;
  }
}

const loveGreeting = (nome) => {
  return `Olá ${nome}, minha querida pessoa!!!`;
}

const formalGreeting = (nome) => {
  return `Excelentíssima pessoa, ${nome}!!!`
}

const badMoodGreeting = () => {
  return 'Oi'
}

const casualGreetng = () => {
  return 'Bond+'
}

console.log(person.greet(loveGreeting, 'Marcos'));
console.log(person.greet(formalGreeting, 'Rods'));
// console.log(person.greet(badMoodGreeting));
// console.log(person.greet(casualGreetng));
