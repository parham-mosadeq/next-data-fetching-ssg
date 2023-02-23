const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getAllPost() {
  const allPosts = await fetch(`${BASE_URL}/posts`);
  const posts = await allPosts.json();
  return posts;
}

export async function getUserIdPosts(userId) {
  const allPosts = await getAllPost();
  console.log(userId);
  const filteredPosts = allPosts.filter((post) => post.userId === +userId);
  return filteredPosts;
}
