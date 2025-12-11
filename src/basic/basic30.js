/* 
	РРеализуйте функцию extractUniqueValues(arr1, arr2), которая берет уникальные элементы первого массива и помещает их в конец второго массива с помощью методов indexOf и push.
*/

export function extractUniqueValues(arr1, arr2) {
  const result = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  }
  return result;
}