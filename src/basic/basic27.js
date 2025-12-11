/* 
	Реализуйте функцию insertAtPosition(arr, pos, elem), которая вставляет новый элемент в указанную позицию массива с помощью методов slice и concat.
*/

export function insertAtPosition(arr, pos, elem) {
  const firstPart = arr.slice(0, pos);
  const secondPart = arr.slice(pos);
  return firstPart.concat(elem, secondPart);
}