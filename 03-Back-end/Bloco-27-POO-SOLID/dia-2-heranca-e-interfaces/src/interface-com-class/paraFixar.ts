interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
};

class Myclass implements MyInterface {
  constructor(
    public myNumber: number,
  ) {}

  myFunc(myParam: number): string {
    return `Soma: ${myParam + this.myNumber}`
  };
};

const myObj = new Myclass(10);

const result = myObj.myFunc(10);

console.log(result);