/* 
	Реализуйте функцию zeroRowColumn(matrix, row, col), которая превращает в ноль всю строку и весь столбец матрицы, соответствующие указанным индексам.
*/

export function zeroRowColumn(matrix, row, col) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === row || j === col) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}