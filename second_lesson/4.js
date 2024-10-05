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