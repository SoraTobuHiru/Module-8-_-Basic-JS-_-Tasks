/* ЗАДАНИЕ 4.
ЗАПИСАТЬ В ПЕРЕМЕННУЮ СЛУЧАЙНОЕ ЦЕЛОЕ ЧИСЛО В ДИАПАЗОНЕ [0; 100]. ИСПОЛЬЗУЙТЕ ОБЪЕКТ MATH. */

// 1. Метод: Math.floor
let randomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
randomInteger(0, 100)

// 2. Метод: Math.round - заниженные шансы выпадения экстремумов
let randomInteger = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
 
randomInteger(0, 100);