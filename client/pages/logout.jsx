export async function Logout() {
  // Logout the user
  await fetch("/api/login", {
    method: "DELETE",
  });

  // Redirect to the front page
  window.location.href = "/";
  return <p>Logging out...</p>;
}
