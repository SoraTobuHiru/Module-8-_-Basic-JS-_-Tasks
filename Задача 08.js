/* ЗАДАНИЕ 8.
СОЗДАЙТЕ ПРОИЗВОЛЬНЫЙ МАССИВ MAP. ПОЛУЧИТЕ ЕГО КЛЮЧИ И ВЫВЕДИТЕ В КОНСОЛЬ ВСЕ ЗНАЧЕНИЯ В ВИДЕ «КЛЮЧ — Х, ЗНАЧЕНИЕ — Y».
ИСПОЛЬЗУЙТЕ ШАБЛОННЫЕ СТРОКИ. */

let randomMap = new Map();
randomMap.set(1, 'black');
randomMap.set(2, 'yellow');
randomMap.set(3, 'purple');

for (let [key, value] of randomMap.entries()) {
  console.log(`Ключ - ${key}, Значение - ${value}`);
}