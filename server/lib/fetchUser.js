const fetch = require("node-fetch");

async function fetchUser(token, config) {
  const userinfo = await fetch(config.userinfo_endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (userinfo.ok) {
    return await userinfo.json();
  } else {
    console.log(`Failed to fetch: ${userinfo.status} ${userinfo.statusText}`);
    return undefined;
  }
}

exports.fetchUser = fetchUser;
