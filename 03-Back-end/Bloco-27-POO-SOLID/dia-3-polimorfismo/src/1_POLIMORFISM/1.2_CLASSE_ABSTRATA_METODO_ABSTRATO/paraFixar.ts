// abstract class Character {
//   abstract talk(): void;
//   abstract specialMove(): void;
// };

// class Melee extends Character {
//   talk(): void {
//     console.log(`I'm Melee`)
//   }
//   specialMove(): void {
//     console.log('My especial Move is fly');
//   }
  
// };

// class LongRangeCharacter extends Character {
//   talk(): void {
//     console.log(`I'm a long range character`)
//   }
//   specialMove(): void {
//     console.log('My especial move is to throw something too far away');
//   }
// };

// function showCharacters(character: Character): void {
//   character.talk();
//   character.specialMove();
// };

// const character1 = new Melee();
// const character2 = new LongRangeCharacter();

// showCharacters(character1);
// showCharacters(character2);