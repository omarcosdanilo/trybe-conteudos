//========= forEach ========

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// for (const value of letters) {
//   console.log(value);
// }

// for (let index = 0; index < letters.length; index += 1) {
//   console.log(letters[index]);
// }

letters.forEach((element, index, array) => console.log(`${index}: ${element} => ${array}`));

