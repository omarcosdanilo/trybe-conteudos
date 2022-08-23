class House {
  value: number;
  address: {
    city: string,
    country: string,
    street: string,
    number: number
  };
  constructor(
    value: number, 
    address: {city: string,
    country: string,
    street: string,
    number: number}) {

    this.value = value;
    this.address = address;

  };

  location(): void {
    const { city, country, street, number} = this.address;
    console.log(`A Casa custa ${this.value} e fica em ${city}, ${country}, na rua ${street} número ${number}`);
  };
};

const addressHouse1 = {
  city: 'São Paulo',
  country: 'Brazil',
  street: 'Leonardo da vinci',
  number: 1301
};

const house1 = new House(1000000, addressHouse1);

house1.location();
