/* 
	Дописать функцию getUserWithFallback, которая пытается получить пользователя с помощью fetchUser, а при ошибке пробует получить данные пользователя c помощью fetchUserData.
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export async function getUserWithFallback(id: number): Promise<User> {
  try {
    return await fetchUser(id);
  } catch (error) {
    return await fetchUserData(id);
  }
}
