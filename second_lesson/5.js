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