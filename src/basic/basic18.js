/* 
	Напишите функцию second_largest(arr), находящую второе максимальное значение в массиве. Если такого элемента нет - вернуть null. Функцию сортировки использовать нельзя, можно использовать циклы while или for.
*/

export function second_largest(arr) {
  let max = null;
  let secondMax = null;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (max === null || current > max) {
      secondMax = max;
      max = current;
    } else if (current !== max && (secondMax === null || current > secondMax)) {
      secondMax = current;
    }
  }
  return secondMax;
}