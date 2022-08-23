var Actions;
(function (Actions) {
    Actions[Actions["Salvar"] = 0] = "Salvar";
    Actions[Actions["Imprimir"] = 1] = "Imprimir";
    Actions[Actions["Abrir"] = 2] = "Abrir";
    Actions[Actions["Visualizar"] = 3] = "Visualizar";
    Actions[Actions["Fechar"] = 4] = "Fechar";
})(Actions || (Actions = {}));
;
var salvar = Actions.Salvar;
var fechar = Actions.Fechar;
console.log(salvar);
console.log(fechar);
