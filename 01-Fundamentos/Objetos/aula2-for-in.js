// pedidos de pizza

let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};

for (let key in pizzas ) {
  console.log(key, pizzas[key])
}


 let pizzasDoces = ['chocolate', 'banana', 'morango'];

 for (let key in pizzasDoces) {
   console.log(key, pizzasDoces[key])
 }