/* ЗАДАНИЕ 1.
НАПИШИТЕ ПРОГРАММУ, КОТОРАЯ РАБОТАЛА БЫ СЛЕДУЮЩИМ ОБРАЗОМ: В PROMPT ВВОДИТСЯ ЗНАЧЕНИЕ. С ПОМОЩЬЮ УНАРНОГО ПЛЮСА (АРИФМЕТИЧЕСКИЙ ОПЕРАТОР) НЕОБХОДИМО ПРЕОБРАЗОВАТЬ ЕГО В ЧИСЛО, ЗАТЕМ ПРОВЕРИТЬ С ПОМОЩЬЮ TYPEOF, ПРИНАДЛЕЖИТ ЛИ ОНО К МНОЖЕСТВУ NUMBER.
ЕСЛИ ЭТО ЧИСЛО, ТО ВЫВЕСТИ В КОНСОЛЬ ЧЁТНОЕ ОНО ИЛИ НЕЧЁТНОЕ. ЕСЛИ ПЕРЕДАНО НЕ ЧИСЛО, ВЫВЕДИТЕ: «УПС, КАЖЕТСЯ, ВЫ ОШИБЛИСЬ».
*NAN, ХОТЬ И ОТНОСИТСЯ К ТИПУ NUMBER, ЧИСЛОМ НЕ ЯВЛЯЕТСЯ. ДОБАВЬТЕ ОТДЕЛЬНУЮ ПРОВЕРКУ ДЛЯ ЭТОГО ЗНАЧЕНИЯ. */

let insertedNumber = prompt (`Введите любое значение`);

let randomNumber = ( +insertedNumber );

if (isNaN(randomNumber)) {
  console.log(`Это NaN - not a number`);
} else if (typeof(randomNumber) === `number`) { 
      function evenOdd(randomNumber) {return randomNumber % 2 === 0 ? `Четное число` : `Нечетное число`}
      console.log(evenOdd(randomNumber))
} else {
      console.log(`Упс, кажется, вы ошиблись`)
}