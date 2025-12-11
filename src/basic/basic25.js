/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/

export function removeFirstOccurrence(arr, value) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      result.push(arr[i]);
    }
  }
  return result;
}