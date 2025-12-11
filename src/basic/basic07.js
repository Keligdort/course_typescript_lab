/* 
	Реализовать функцию factorial, использующую цикл while, которая вычисляет факториал числа n. Факториалом числа n называют произведение всех натуральных чисел от 1 до n включительно. Например, factorial(5) равно 1 * 2 * 3 * 4 * 5 = 120.
*/

export function factorial(n){
  if (n === 0) return 1;
  let result = 1, i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}