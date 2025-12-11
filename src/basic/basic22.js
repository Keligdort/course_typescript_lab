/* 
	Реализуйте функцию palindrome_check(word), которая проверяет, является ли слово палиндромом (читается одинаково слева направо и справа налево).
	Подсказка: используйте методы split и join для строк и метод reverse для массивов.
*/

export function palindrome_check(word) {
  const chars = word.toLowerCase().split('');
  const reversedChars = chars.reverse();
  const reversedWord = reversedChars.join('');
  return word.toLowerCase() === reversedWord;
}
