const db = require("../config/db.config");

exports.register = (data, cb) => {
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [data.firstName, data.lastName, data.emailId, data.password],
    (err, results, fields) => {
      if (err) {
        return cb(err);
      }
      return cb(null, `Registration successful`);
    }
  );
};

exports.login = (data, cb) => {
  db.query(
    `SELECT id FROM users where emailId = ? AND password = ?`,
    [data.emailId, data.password],
    (err, results, fields) => {
      if (err) {
        return cb(err);
      }
      if (results.length > 0) {
        return cb(null, `Logged in Successfully`);
      } else {
        return cb(`Invalid Credentials`);
      }
    }
  );
};
