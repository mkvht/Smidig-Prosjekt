async function getCompanyName(userID, postgresDB) {
  return new Promise((resolve) => {
    postgresDB.query(
      "SELECT user_company_name FROM users WHERE user_id = $1 ",
      [userID],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          resolve(result.rows[0]);
        }
      }
    );
  });
}

exports.getCompanyName = getCompanyName;
