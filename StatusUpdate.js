const student = require("./dbConn");

function UpdateNow(req, res) {
  const id = req.body.id;
  student
    .findOne({ apid: id })
    .then((data) => {
      data.appstatus = "accepted";
      data.save();
      res.end();
    })
    .catch();
}

module.exports = UpdateNow;
