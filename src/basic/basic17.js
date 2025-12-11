/* 
	Напишите функцию remove_duplicates(arr), удаляющую дублирующиеся значения из массива, сохраняя порядок остальных элементов.
	Подсказка: можно использовать функцию includes.
*/

export function remove_duplicates(arr) {
  const unique = [];
  let i = 0;
  while (i < arr.length) {
    const currentElement = arr[i];
    if (!unique.includes(currentElement)) {
      unique.push(currentElement);
    }
    i++;
  }
  return unique;
}