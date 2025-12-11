/* 
	Напишите функцию swap_first_last(arr), меняющую местами первый и последний элемент массива. Функция не должна использовать функции высших порядков и оператор ..., также она не должна изменять исходный массив, можно использовать циклы while или for.
*/

export function swap_first_last(arr) {
  const newArr = new Array(arr.length);
  let i = 0;
  while (i < arr.length) {
    newArr[i] = arr[i];
    i++;
  }
  newArr[0] = arr[arr.length - 1];
  newArr[arr.length - 1] = arr[0];
  return newArr;
}