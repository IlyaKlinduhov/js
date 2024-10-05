// Задание 1
// Создайте переменные для хранения информации о трех пользователях (имя 
// пользователя, его возраст и город проживания). Используйте различные
// ключевые слова для определения переменных. Выведите их значения в 
// консоль. Обновите возраст первого пользователя.

var name_first = 'Илья';
var age_first = 19;
var city_first = 'Москва';

let name_second = 'Иван';
let age_second = 20;
let city_second = 'Сочи';

const name_third = 'Игорь';
const age_third = 33;
const city_third = 'Челябинск';

console.log(`user1: ${name_first} ${age_first} ${city_first}`);
console.log(`user2: ${name_second} ${age_second} ${city_second}`);
console.log(`user3: ${name_third} ${age_third} ${city_third}`);

age_first = 100;

console.log(`user1: ${age_first}`);

// Задание 2
// Объявите переменные, имеющие различные типы данных. Выведите в консоль 
// их значения и типы данных, используя оператор typeof.

let numberVar = 42;                     // Число
let stringVar = "Hello, world!";         // Строка
let booleanVar = true;                   // Булево значение
let objectVar = { name: "Alice", age: 30 };  // Объект
let arrayVar = [1, 2, 3, 4, 5];          // Массив
let undefinedVar;                        // Undefined
let nullVar = null;                      // Null
let bigIntVar = 12345678901234567890n;   // BigInt
let functionVar = function() {           // Функция
  return "This is a function";
};

console.log(`numberVar: ${numberVar}, type: ${typeof numberVar}`);
console.log(`stringVar: ${stringVar}, type: ${typeof stringVar}`);
console.log(`booleanVar: ${booleanVar}, type: ${typeof booleanVar}`);
console.log(`objectVar: ${JSON.stringify(objectVar)}, type: ${typeof objectVar}`);
console.log(`arrayVar: ${arrayVar}, type: ${typeof arrayVar}`);
console.log(`undefinedVar: ${undefinedVar}, type: ${typeof undefinedVar}`);
console.log(`nullVar: ${nullVar}, type: ${typeof nullVar}`);
console.log(`bigIntVar: ${bigIntVar}, type: ${typeof bigIntVar}`);
console.log(`functionVar: ${functionVar()}, type: ${typeof functionVar}`);

// Задание 3
// Напишите программу, которая находит среди трех чисел наибольшее, 
// используя логические условия.

function max(a, b, c){
    if (a > b){
        if (a > c){ 
            return a; 
        }
        else{
            return c ;
        }
    }
    else{
        if (b > c){
            return b;
        }
        else{
            return c; 
        }
    }
}

console.log(max(55, 34343, 1));

// Задание 4
// Напишите программу, которая выводит числа от 1 до 10 с помощью различных 
// циклов: while, do…while, for.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

let i = 1;
do {
    console.log(i++)
} while (i < 11);

i = 1;

while(i < 11) {
    console.log(i++);
}

// Задание 5
// Создайте функцию, которая принимает два аргумента, выполняет над ними 
// математическую операцию и возвращает ее результат. Используйте три
// различных синтаксиса описания функции.

function dif(a, b){
    return(a - b);
}
console.log(dif(3, 26));

let multip = function(a, b) {
    return(a * b);
}
console.log(multip(4, 3));

let sum = (a, b) => a + b;
console.log(sum(12, 6));