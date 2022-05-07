const express = require("express");
const app = express();
const student = require("./dbConn");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
var path = require("path");
app.use(cookieParser());
dotenv.config({ path: "./.env" });
const FindLastId = require("./getdblastid");
const NewStudent = require("./saveStudent");
const AllApplications = require("./dball");
const OneDoc = require("./SingledbDoc");
const UpdateNow = require("./StatusUpdate");
const Delete = require("./DeleteApplication");

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

// get last document of database
app.get("/getid", FindLastId);

// all database documentation
app.get("/fetchdb", AllApplications);

// get last document of database
app.post("/student", NewStudent);

// there is update application status
app.post("/update", UpdateNow);

// delete student application
app.post("/delete", Delete);

// find one doc and show student mean applicant
app.post("/oneapplication", OneDoc);

//this is for heroku don,t touch
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function () {
  console.log("listen port 5000");
});
