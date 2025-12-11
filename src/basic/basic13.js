/* 
	Напишите функцию average(arr), которая рассчитывает среднее арифметическое элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return NaN;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}