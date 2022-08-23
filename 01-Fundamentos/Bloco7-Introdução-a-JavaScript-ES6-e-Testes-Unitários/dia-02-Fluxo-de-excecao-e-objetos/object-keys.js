// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// console.log(Object.keys(coolestTvShow))


// Crie uma função que exiba as habilidades de student no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const habilidades = (student) => {
  const hablities = Object.keys(student);

  for (i in hablities) {
    console.log(`${hablities[i]}, Nível: ${student[hablities[i]]}`);
  }
}

console.log(habilidades(student1));