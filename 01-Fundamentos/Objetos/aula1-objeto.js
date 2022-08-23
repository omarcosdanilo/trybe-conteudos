// ============= Criando um Objeto =============
let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickName: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
  // ========== Criando um objeto como propriedade de um objeto ==========
  bornInfo: {
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro'
  }
}

// ============= Acessando os valores do objeto ============

// =================== 1ª Forma ============================
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos' )

// =================== 2ª Forma ============================
console.log(('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos' ))

// ================== Criando uma nova propriedade ==========
singer['fullName'] = singer.name + ' ' + singer.lastName

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no ' + singer.bornInfo.city )
