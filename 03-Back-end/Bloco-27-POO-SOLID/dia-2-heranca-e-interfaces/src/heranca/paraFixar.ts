class Superclass {
  constructor(
    public isSuper: boolean
  ){}

  public sayHello() {
    return 'Olá mundo!!!';
  };
};

class Subclass extends Superclass {
  constructor(public isSuper: boolean) {
    super(false);
  };
};

const myFunc = (obj: Superclass) => {
  if(obj.isSuper) {
    console.log('Super!!!');
  } else {
    console.log('Sub!!!');
  }
};

const superObj = new Superclass(true);
const subObj = new Subclass(false);

myFunc(superObj);
myFunc(subObj);