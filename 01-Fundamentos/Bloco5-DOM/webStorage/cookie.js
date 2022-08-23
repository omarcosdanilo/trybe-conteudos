//Criando um cookie
document.cookie = "email=isabella@email.com";
//Colocando o cookie numa variável
const myCookie = document.cookie;
console.log(myCookie);

//Definindo uma data de expiração para o cookie
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";

//Definindo o caminho que o cookie pertence
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";
