/* 
	Дописать функцию fetchUserWithTimeout, которая отклоняет промис, если запрос занимает больше 100ms.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithTimeout(id: number, timeout = 100): Promise<User> {
  let timerId: ReturnType<typeof setTimeout>;

  const timeoutPromise = new Promise<User>((_, reject) => {
    timerId = setTimeout(() => {
      reject(new Error("Request timeout"));
    }, timeout);
  });

  return Promise.race([
    fetchUser(id),
    timeoutPromise
  ]).finally(() => {
    clearTimeout(timerId);
  });
}
