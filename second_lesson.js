// Задание 1
// Создайте объект, содержащий информацию о пользователе (имя, возраст, 
// город), выведите его в консоль. Измените значение возраста, добавьте в объект 
// новое свойство, а одно из существующих удалите, выведите обновленные 
// данные. Создайте объект второго пользователя и посчитайте сумму возрастов 
// двух пользователей.

let user1 = {
    name: 'Ilya',
    age: 19,
    city: 'Moscow'
}

console.log(user1);

user1.age = 99;
user1.univercity = 'MIREA';
delete user1.city;

console.log(user1);

let user2 = {
    name: 'Мария', 
    age: 25
}
console.log(`Cумма возрастов: ${user1.age + user2.age}`)

// Задание 2
// Создайте произвольную строку, выведите в консоль ее длину, первый и 
// последний символы. Проверьте, начинается ли строка с foo, заканчивается ли 
// на bar, содержит ли она некоторую подстроку.

let string = 'test_string';

console.log(`Начало строки: ${string[0]}. Конец строки ${string[string.length - 1]}`);
console.log(`Начало с foo: ${string.startsWith('foo')}`);
console.log(`Конец на bar: ${string.endsWith('bar')}`);
console.log(`Содержит ли подстроку test: ${string.includes('test')}`);

// Задание 3
// Создайте массив, содержащий пять произвольных элементов, выведите в 
// консоль его первый и последний элементы. Обновите значение второго 
// элемента массива, создайте второй массив, который является копией первого, 
// выведите оба массива в консоль. Создайте функцию, которая объединяет два 
// массива в один. Создайте массив пользователей (у каждого пользователя
// должно быть имя) и напишите функцию, которая принимает данный массив и
// возвращает массив имен. Создайте функцию нахождения среднего 
// арифметического для массива чисел.

let arr = [1, 4, 5, 2, 23];
console.log(arr);

arr[1] = 333;
let new_arr = arr;

console.log(`Первый массив: ${arr}. Второй массив ${new_arr}`);

function merge_arrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(`Объединение массивов: ${merge_arrays(arr, new_arr)}`);

let first_user = {
    name: 'Ilya',
    age: 19
};
let second_user = {
    name: 'Mike',
    age: 30
}
let third_user = {
    name: 'Jack',
    age: 40
}

let user_array = [first_user, second_user, third_user];

function getUserName(user_array) {
    let name_array = []
    for (let i = 0; i < user_array.length; i++) {
        name_array.push(user_array[i].name);
    }
    return name_array;
}

console.log(`Массив из имен: ${getUserName(user_array)}`);

function getAVGFromArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(`Среднее арифметическое для 1 массива: ${getAVGFromArray(arr)}`);


// Задание 4
// Создайте набор имен с помощью Set, добавьте в него четыре значения. Удалите 
// первый добавленный элемент, проверьте его отсутствие в наборе, выведите в 
// консоль его размер

let set = new Set();

set.add("Mike");
set.add("Jack");
set.add("John");
set.add("Moussa");

set.delete("Moussa");
console.log(`Отсутствует ли Moussa: ${!set.has("Moussa")}`);
console.log(`Размер набора: ${set.size}`);

// Задание 5
// Создайте коллекцию ключ-значение с помощью Map, добавьте в нее три
// элемента, выведите в консоль значение последнего добавленного элемента.
// Удалите любой элемент, проверьте его отсутствие в коллекции.

let map = new Map();

map.set('Mike', 10)
map.set('Jack', 20)
map.set('John', 30)

console.log('Значение последнего добавленного элемента: ', map.get('John'));
map.delete('Jack');
console.log('Jack:', !map.has('Jack'));