// Задание 2
// Создайте произвольную строку, выведите в консоль ее длину, первый и 
// последний символы. Проверьте, начинается ли строка с foo, заканчивается ли 
// на bar, содержит ли она некоторую подстроку.

let string = 'test_string';

console.log(`Начало строки: ${string[0]}. Конец строки ${string[string.length - 1]}`);
console.log(`Начало с foo: ${string.startsWith('foo')}`);
console.log(`Конец на bar: ${string.endsWith('bar')}`);
console.log(`Содержит ли подстроку test: ${string.includes('test')}`);