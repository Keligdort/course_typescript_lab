/* 
	Реализуйте функцию diagonalSum(matrix), которая вычисляет сумму элементов главной диагонали матрицы.
*/

export function diagonalSum(matrix) {
    let sum = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        sum += matrix[i][i];
    }
    return sum;
}