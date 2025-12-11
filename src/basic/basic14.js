/* 
	Реализуйте функцию even_elements(arr), которая возвращает новый список, содержащий только четные элементы исходного списка. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function even_elements(arr) {
  if (!Array.isArray(arr)) return [];
  const evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}