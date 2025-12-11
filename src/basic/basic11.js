/* 
	Реализуйте функцию is_prime(n), которая проверяет, является ли число n простым. Простое число — это натуральное число больше единицы, которое делится только на 1 и само себя. Функция должна использовать цикл while.
*/

export function is_prime(n) {
  if (n < 2) return false;
  let divisor = 2;
  while (divisor < n) {
    if (n % divisor === 0) return false;
    divisor++;
  }
  return true;
}