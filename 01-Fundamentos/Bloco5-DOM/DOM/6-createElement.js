// =========== Ingredientes da lista ==========
let ingredientItems = [
  '500g de feijão carioquinha cozido',
  '200g de toucinho',
  '1 concha de óleo',
  '1 cebola média picada',
  '4 dentes de alho',
  '5 ovos',
  '1 colher de sopa de sal com alho',
  'Cheiro verde a gosto',
  '200g de farinha de mandioca'
];

// =========== 1º - Recuperar o elemento HTML onde queremos adicionar ===========
let ingredientsList = document.querySelector(".ingredients-list");

// =========== 2º - Percorrer nossa lista de ingredientes =======================
for (let i = 0; i < ingredientItems.length; i += 1) {
  let ingredient = ingredientItems[i];

  //========= 3º - Criar o item da lista ========================================
  let ingredientListItem = document.createElement('li')
 
  //========= 4º - Atribuir para o li o texto do ingrediente ====================
  ingredientListItem.innerText = ingredient;
  //========== Aqui foi adicionada uma classe para os items para usar na remoção==============
  ingredientListItem.className = 'ingredients-list-item';

  //========= 5º - Adicionar o li como filho da lista que recuperamos ===========
  ingredientsList.appendChild(ingredientListItem)
  console.log(ingredientListItem)
}

// ==================== Como remover algum item? ===============

// 1º Recuperar todos os items da lista
let ingredientListItems = document.querySelectorAll('.ingredients-list-item');

for (let i = 0; i < ingredientListItems.length; i += 1) {
  let element = ingredientListItems[i];

  if (element.innerText.includes('toucinho')) {
    ingredientsList.removeChild(element);
  }
}