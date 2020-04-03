'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientItem = document.querySelector('#ingredients');

const AllIngredient = ingredients.map((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  return listItem;
});
ingredientItem.append(...AllIngredient);

//   Напиши скрипт, который для каждого элемента массива ingredients 
//   создаст отдельный li, после чего вставит все li за одну операцию 
//   в список ul.ingredients. Для создания DOM-узлов 
//   используй document.createElement().