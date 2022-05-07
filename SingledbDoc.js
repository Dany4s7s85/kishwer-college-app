const student = require("./dbConn");

function OneDoc(req, res) {
  const id = req.body.id;
  student
    .findOne({ apid: id })
    .then((data) => {
      res.write(JSON.stringify(data));
      res.end();
    })
    .catch();
}

module.exports = OneDoc;
