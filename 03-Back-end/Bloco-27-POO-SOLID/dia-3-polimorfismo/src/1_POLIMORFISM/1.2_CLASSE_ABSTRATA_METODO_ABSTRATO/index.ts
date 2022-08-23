/*
Dicionário en-pt:
- fish: peixe
*/

abstract class Animal {
  constructor(public name: string) { }
  abstract move(): void
}
class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish extends Animal {
  move() { console.log(`${this.name} está nadando.`); }
}

const fish = new Fish('Tubarão');
const parrot = new Bird('Papagaio');
const armadillo = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
// myMove(fish);
// myMove(parrot);
// myMove(armadillo);

// ===============================================  EXEMPLO DE CLASSES ABSTRATAS IMPLEMENTANDO MÉTODOS =========================

abstract class Database {
  protected _name: string

  constructor(name: string) {
    this._name = name;
  }
  abstract connect(): void

  get name() {
    return this._name;
  };
}

class MySQLDatabase extends Database {
  connect(): void {
    console.log(`Conectando ao banco de dados ${this._name}`);
  };
};

class PostgreesDatabase extends Database{
  connect(): void {
    console.log(`Conectando ao banco de dados ${this._name}`)
  }
} 

function connectToDataBase(db: Database): void {
  db.connect();
};

const db1 = new MySQLDatabase('MySQL');
const db2 = new PostgreesDatabase('Postgrees');

// connectToDataBase(db1);
// connectToDataBase(db2);

// ============================ MÉTODOS E ATRIBUTOS ESTÁTICOS =============================== 

/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/

class Employee {
  private static employeeCount = 0

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees() {
    return this.employeeCount;
  }
}

console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);