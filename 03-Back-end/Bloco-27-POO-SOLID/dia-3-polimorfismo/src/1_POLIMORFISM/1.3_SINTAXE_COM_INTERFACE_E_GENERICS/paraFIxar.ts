interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(character: Character): Promise<DbCharacter> ;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
};

class LocalDbModel implements IModel {

  async create(character: Character): Promise<DbCharacter> {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId, ...character};
    db.push(newCharacter);
    return newCharacter;
  }

  async getAll() {
    return db;
  }

  findIndex(id: number) {
    const index = db.findIndex((character) => character.id === id);

    if(index < 0) throw new Error('Character not found');

    return index;
  }

  async getById(id: number): Promise<DbCharacter> {
    const index = this.findIndex(id);

    const filtered = db[index];

    return filtered;
  }

  async update(id: number, character: Character): Promise<DbCharacter> {
    const index = this.findIndex(id);

    db[index] = { ...db[index], ...character};
    
    return db[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.findIndex(id);

    const deleted = db.splice(index, 1);

    if (deleted.length > 0) return true;

    return false;
  }
}

class CharacterService {
  readonly model: IModel;

  constructor(model: LocalDbModel) {
    this.model = model
  };

  async create(character: Character) {
    const created = await this.model.create(character);

    return ({ status: 201, data: created });
  }
}