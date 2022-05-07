const student = require("./dbConn");

function NewStudent(req, res) {
  const appstatus = "progress";
  const {
    apid,
    name,
    gender,
    status,
    birth,
    email,
    phone,
    address,
    city,
    state,
    course,
    sname,
    saddress,
    marks,
  } = req.body;
  if (
    !name ||
    !gender ||
    !status ||
    !birth ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !state ||
    !course ||
    !sname ||
    !saddress ||
    !marks
  ) {
    res.end("all fields required");
  } else {
    const studentdocumentation = {
      apid,
      name,
      gender,
      status,
      birth,
      email,
      phone,
      address,
      city,
      state,
      course,
      sname,
      saddress,
      marks,
      appstatus,
    };
    const StudentDoc = new student(studentdocumentation);
    StudentDoc.save();
    res.end();
  }
}

module.exports = NewStudent;
