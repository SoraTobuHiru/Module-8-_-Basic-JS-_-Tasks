/* ЗАДАНИЕ 3.
ДАНА СТРОКА. НЕОБХОДИМО ВЫВЕСТИ В КОНСОЛЬ ПЕРЕВЕРНУТЫЙ ВАРИАНТ. НАПРИМЕР, "Hello" -> "olleH". */

/* 1.   Метод String.split: разбить строку на массив строк -> 
        Метод Array.reverse: развернуть массив от последнего элемента к первому -> 
        Метод Array.join: собрать элементы массива в строку */

function reverseString(str) {
    return str.split(``).reverse().join(``);
}
console.log(reverseString(`Hello!`));

// 2.   Цикл, который перебирает индексы символов в строке от конца str[n] к началу str[]

function reverseString(str) {
  
    let newString = ``;
  
    for (let counter = str.length - 1; counter >= 0; counter--) {
        newString += str[counter];
    }
    return newString;
}

console.log(reverseString(`Hello!`));