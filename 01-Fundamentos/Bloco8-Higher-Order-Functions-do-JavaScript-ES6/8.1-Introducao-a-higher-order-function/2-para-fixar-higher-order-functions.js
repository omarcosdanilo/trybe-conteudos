const wakingUp = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (hora, func) => ` ${func} ${hora} horas`;

console.log(doingThings(7, sleep()));