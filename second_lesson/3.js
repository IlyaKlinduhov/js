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