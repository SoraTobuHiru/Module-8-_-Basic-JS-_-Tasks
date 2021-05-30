/* ЗАДАНИЕ 9.
РАНЕЕ В ЮНИТЕ «ЦИКЛЫ» ВЫ ВЫПОЛНЯЛИ СЛЕДУЮЩЕЕ ЗАДАНИЕ:
"ДАН МАССИВ. НУЖНО ВЫВЕСТИ В КОНСОЛЬ КОЛИЧЕСТВО ЧЁТНЫХ И НЕЧЁТНЫХ ЭЛЕМЕНТОВ В МАССИВЕ. ЕСЛИ В МАССИВЕ ЕСТЬ НУЛЕВОЙ ЭЛЕМЕНТ, ТО ОН УЧИТЫВАЕТСЯ И ВЫВОДИТСЯ ОТДЕЛЬНО. 
ПРИ ВЫПОЛНЕНИИ ЗАДАНИЯ НЕОБХОДИМО УЧЕСТЬ, ЧТО МАССИВ МОЖЕТ СОДЕРЖАТЬ НЕ ТОЛЬКО ЧИСЛА, НО И, НАПРИМЕР, ЗНАКИ, NULL И ТАК ДАЛЕЕ."
НА ЭТОТ РАЗ ОФОРМИТЕ РЕШЕНИЕ В ВИДЕ ФУНКЦИИ, ПОСТАРАЙТЕСЬ ДАТЬ ЭТОЙ ФУНКЦИИ КОРРЕКТНОЕ НАЗВАНИЕ, ВЫЗОВИТЕ ФУНКЦИЮ, ПРОАНАЛИЗИРУЙТЕ СИНТАКСИС. */

let randomArray = [1, 7, 18, 99, 59478, `elk`, 0];

    if (typeof(randomArray[0]) !== `number`) {
        console.log(`Нулевой элемент массива - вообще не число`)
    } else ((randomArray[0] % 2 === 0) && (typeof(randomArray[0])) === `number`) 
        ? console.log(`Нулевой элемент массива - четное число`) 
        : console.log(`Нулевой элемент массива - нечетное число`);

function countEvenOdd(arr) {
  
  let oddNumbers = evenNumbers = 0;

  for (let counter = 1; counter < arr.length; counter++) {
    if ((arr[counter] % 2 === 0) && (typeof(arr[counter]) === `number`)) {
      evenNumbers++;
    } else if (typeof(arr[counter]) === `number`) {
      oddNumbers++;
    }
  };
  
  console.log(`Количество нечетных чисел: ${oddNumbers}`);
  console.log(`Количество четных чисел: ${evenNumbers}`);
}

countEvenOdd(randomArray);