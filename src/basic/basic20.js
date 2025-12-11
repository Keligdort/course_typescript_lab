/* 
	Напишите функцию concatenate_strings(arr), объединяющую строки из массива в одну длинную строку. Функция не должна использовать функции высших порядков и оператор ..., можно использовать циклы while или for.
*/

export function concatenate_strings(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      result += arr[i];
    }
  }
  return result;
}
