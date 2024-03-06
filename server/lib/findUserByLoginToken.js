function findUserByLoginToken(logins, login_token) {
  return logins.filter((login) => login[login_token])[0];
}

exports.findUserByLoginToken = findUserByLoginToken;
