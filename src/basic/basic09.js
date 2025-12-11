/* 
	Реализовать функцию fibonacci(n), которая возвращает n-е число последовательности Фибоначчи. Последовательность начинается с 0 и 1, каждое следующее число — сумма двух предыдущих. Функция должна использовать цикл while.
*/

export function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0, curr = 1, counter = 2;
  while (counter <= n) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    counter++;
  }
  return curr;
}