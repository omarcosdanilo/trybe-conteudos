export function greeter(name: string) {
  return `Olá ${name}!`;
};

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
};

export function add(x: number, y: number): number {
  return x + y;
};

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
};

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
};

export function square(side: number): number {
  return side ** 2;
};

export function rectangle(base: number, height: number): number {
  return base * height;
};

export function losango(Dmaior: number, dMenor: number): number {
  return Dmaior * dMenor;
};

export function trapezio(Bmaior: number, bMenor: number, h: number): number {
  return ((Bmaior + bMenor) * h) / 2;
};

export function circle(raio: number): number {
  return raio * 3.14;
};
