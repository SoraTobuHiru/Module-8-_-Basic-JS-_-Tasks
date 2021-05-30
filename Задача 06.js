/* ЗАДАНИЕ 6.
ДАН МАССИВ. ПРОВЕРИТЬ, ОДИНАКОВЫЕ ЛИ ЭЛЕМЕНТЫ В МАССИВЕ И ВЫВЕСТИ РЕЗУЛЬТАТ TRUE ИЛИ FALSE В КОНСОЛЬ. РЕЧЬ ИДЁТ НЕ О ДВУХ РЯДОМ СТОЯЩИХ ОДИНАКОВЫХ ЭЛЕМЕНТАХ, А ОБО ВСЕХ. ПРОВЕРИТЬ, ВСЕ ЛИ ЭЛЕМЕНТЫ В МАССИВЕ ОДИНАКОВЫЕ. */

let randomArray = [`dog`, `dog`, `dog`, `dog`, `dog`, `cat`];

function ifValuesTheSame(arr) {
  for (let counter = 0; counter < arr.length; counter++)
    if (arr[counter] !== arr[0])
        return false;
  return true;
};

console.log(ifValuesTheSame(randomArray));