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

ingredients.forEach((item) => {
  const listItem = document.createElement('li');
  // console.log(listItem)
  listItem.textContent = item;
  ingredientItem.appendChild(listItem);
});

//   Напиши скрипт, который для каждого элемента массива ingredients 
//   создаст отдельный li, после чего вставит все li за одну операцию 
//   в список ul.ingredients. Для создания DOM-узлов 
//   используй document.createElement().