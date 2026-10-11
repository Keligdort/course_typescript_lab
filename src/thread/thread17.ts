/* 
	Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/

import { fetchUser, type User } from "./promises";

export async function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  let lastError: any;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fetchUser(id);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}
