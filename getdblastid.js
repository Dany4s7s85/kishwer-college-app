const student = require("./dbConn");

function FindLastId(req, res) {
  student
    .find()
    .then((lastdoc) => {
      var maxid = lastdoc[0].apid;

      for (var a = 0; a < lastdoc.length; a++) {
        if (lastdoc[a].apid < lastdoc[a - 1]) {
          maxid = lastdoc[a].apid;
        }
      }
      maxid++;
      res.end(JSON.stringify(maxid));
    })
    .catch(() => {
      console.log("error occured");
    });
}

module.exports = FindLastId;
