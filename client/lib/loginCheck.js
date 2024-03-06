import { fetchLogin } from "./fetchAPI";

export async function loginCheck() {
  const loggedIn = await fetchLogin();
  return Object.keys(loggedIn.user).length > 0;
}
