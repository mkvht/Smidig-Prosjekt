function getImpactInfo(user_impactID, postgresDB) {
  return new Promise(function (resolve) {
    postgresDB.query(
      "SELECT user_impact.user_id, user_impact.user_impact_amount, impact.project_id, impact.impact_description_past_tense, impact.impact_cost FROM user_impact INNER JOIN  impact ON user_impact.impact_id = impact.impact_id  WHERE user_impact.user_impact_id = $1",
      [user_impactID],
      function (err, result) {
        if (err) {
          resolve(null);
        } else {
          resolve(result.rows[0]);
        }
      }
    );
  });
}

exports.getImpactInfo = getImpactInfo;
