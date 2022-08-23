// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type EstadosMateria = 'liquido' | 'solido' | 'gasoso';
//Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto.
type CPF = number | string;
//Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type Systems = 'linux' | 'mac' | 'windows';
//Crie um type union que represente as vogais do alfabeto.
type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';

const printEstadosMateria = (estado: EstadosMateria) => console.log(estado);

const printCpf = (cpf: CPF) => console.log(cpf);

const printSystem = (system: Systems) => console.log(system);

const printVowel = (vowel: Vowels) => console.log(vowel);

printEstadosMateria('liquido');
printCpf(1234556677);
printSystem('linux');
printVowel('e');