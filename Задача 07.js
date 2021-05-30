/* ЗАДАНИЕ 7.
ДАН МАССИВ. НУЖНО ВЫВЕСТИ В КОНСОЛЬ КОЛИЧЕСТВО ЧЁТНЫХ И НЕЧЁТНЫХ ЭЛЕМЕНТОВ В МАССИВЕ. ЕСЛИ В МАССИВЕ ЕСТЬ НУЛЕВОЙ ЭЛЕМЕНТ, ТО ОН УЧИТЫВАЕТСЯ И ВЫВОДИТСЯ ОТДЕЛЬНО. 
ПРИ ВЫПОЛНЕНИИ ЗАДАНИЯ НЕОБХОДИМО УЧЕСТЬ, ЧТО МАССИВ МОЖЕТ СОДЕРЖАТЬ НЕ ТОЛЬКО ЧИСЛА, НО И, НАПРИМЕР, ЗНАКИ, NULL И ТАК ДАЛЕЕ. */

let randomArray = [1, 7, 18, 99, 59478, `elk`, 0];
 
    if (typeof(randomArray[0]) !== `number`) {
        console.log(`Нулевой элемент массива - вообще не число`)
    } else ((randomArray[0] % 2 === 0) && (typeof(randomArray[0])) === `number`) 
        ? console.log(`Нулевой элемент массива - четное число`) 
        : console.log(`Нулевой элемент массива - нечетное число`);

let oddNumbers = evenNumbers = 0;

  for (let counter = 0; counter < randomArray.length; counter++) {
    if ((randomArray[counter] % 2 === 0) && (typeof(randomArray[counter]) === `number`)) {
      evenNumbers++
    } else if (typeof(randomArray[counter]) === `number`) {
      oddNumbers++
    }
  };
  
  console.log(`Количество нечетных чисел: ${oddNumbers}`);
  console.log(`Количество четных чисел: ${evenNumbers}`);