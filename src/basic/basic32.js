/* 
	Напишите функцию matrixMultiplication(A, B), выполняющую перемножение матриц А и В.
*/

export function matrixMultiplication(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const colsB = B[0].length;
  const result = Array(rowsA)
    .fill()
    .map(() => Array(colsB).fill(0));
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return result;
}
