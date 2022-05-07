const student = require("./dbConn");

function AllApplications(req, res) {
  student
    .find()
    .then((data) => {
      res.write(JSON.stringify(data));
      res.end();
    })
    .catch();
}

module.exports = AllApplications;
