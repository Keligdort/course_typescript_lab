/* 
	Дописать функцию getUserPostsWithAuthor, которая получает посты пользователя, а затем информацию об авторе каждого поста.
*/

import { fetchUser, fetchUserPosts, type Post } from "./promises";
import type { User } from "./thread07";

export async function getUserPostsWithAuthor(userId: number): Promise<Array<Post & { author: User }>> {
  const posts = await fetchUserPosts(userId);
  const author = await fetchUser(userId);
  
  return posts.map(post => ({
    ...post,
    author
  }));
}
