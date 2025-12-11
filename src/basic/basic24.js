/* 
	Напишите функцию replace_word(sentence, old_word, new_word), заменяющую старое слово новым словом в предложении.
*/

export function replace_word(sentence, old_word, new_word) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i] === old_word) {
      words[i] = new_word;
    }
  }
  return words.join(' ');
}


