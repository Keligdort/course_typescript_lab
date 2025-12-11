/* 
	Реализуйте функцию rotateArrayLeft(arr), которая сдвигает элементы массива влево на одну позицию с помощью методов shift и push. Предусмотрти случай, когда массив пустой.
*/

export function rotateArrayLeft(arr) {
    if (arr.length <= 1) {
    return arr;
  }
  const result = [...arr];
  const firstElement = result.shift();
  result.push(firstElement);
  return result;
}