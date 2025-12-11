/* 
	Реализуйте функцию reverse_list(arr), которая переворачивает порядок элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function reverse_list(arr) {
  const reversedArr = new Array(arr.length);
  let i = 0;
  while (i < arr.length) {
    reversedArr[i] = arr[arr.length - 1 - i];
    i++;
  }
  return reversedArr;
}