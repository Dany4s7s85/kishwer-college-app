const student = require("./dbConn");

function Delete(req, res) {
  const id = req.body.id;
  student.findOneAndDelete({ apid: id }, (error, data) => {
    if (error) {
      console.log("error occured");
    } else {
      res.end();
    }
  });
}

module.exports = Delete;
