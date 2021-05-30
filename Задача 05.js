/* ЗАДАНИЕ 5.
ДАН ПРОИЗВОЛЬНЫЙ МАССИВ. НЕОБХОДИМО ВЫВЕСТИ КОЛИЧЕСТВО ЭЛЕМЕНТОВ МАССИВА, ЗАТЕМ ПЕРЕБРАТЬ ЕГО И ВЫВЕСТИ В КОНСОЛЬ КАЖДЫЙ ЭЛЕМЕНТ МАССИВА. */

let randomArray = [`book`, `e-reader`, `audiobook`];

console.log(randomArray.length);

for (let itemArray of randomArray) { /* Перебор циклом for...of  */
  console.log(itemArray);
};

for (let counter = 0; counter < randomArray.length; counter++) { /* Перебор циклом for */
  console.log(randomArray[counter]);
};

randomArray.forEach(function(item) { /* Перебор методом массива for.Each */
  console.log(item);
}); 