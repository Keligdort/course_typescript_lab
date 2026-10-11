/* 
	 Допишите функцию withRetry, которая пытается выполнить операцию несколько раз перед тем как сдаться.
*/

export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3
): Promise<T> {
  let lastError: any;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}
