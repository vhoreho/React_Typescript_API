export async function getReposFromGithub(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const users = await response.json();
  return users;
}