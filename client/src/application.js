import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavBar from "./Nav";
function Application() {
  const history = useHistory();
  var [applicationId, setapplicationId] = useState("111111");
  var [response, setresponse] = useState("");
  var [FormData, setFormData] = useState({
    apid: "",
    name: "",
    gender: "",
    status: "",
    birth: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    course: "",
    sname: "",
    saddress: "",
    marks: "",
  });

  function GetValue(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...FormData, [name]: value });
  }

  function SendForm(event) {
    event.preventDefault();
    FormData.apid = applicationId;
    axios
      .post("/student", FormData)
      .then((res) => {
        if (res.data) {
          setresponse(res.data);
        } else {
          history.push("/");
        }
      })
      .catch();
  }

  function GetId() {
    axios
      .get("getid")
      .then((res) => {
        if (res.data) {
          setapplicationId(res.data);
        }
      })
      .catch();
  }
  useEffect(() => {
    GetId();
  });

  return (
    <div>
      <NavBar />
      <div className="FormMainDiv">
        <div>
          <form>
            <h4>Your application ID: {applicationId} </h4>
            <p className="text-success">
              Note: Remember Your Application ID. Then you will check
              application status
            </p>
            Your Name:
            <input placeholder="Your Name" onChange={GetValue} name="name" />
            Your Gender:
            <input placeholder="Gender" onChange={GetValue} name="gender" />
            Single or Merried:
            <input
              placeholder="Meterial Status"
              onChange={GetValue}
              name="status"
            />
            Your Date-of-Birth:
            <input
              placeholder="Date-of-Birth"
              onChange={GetValue}
              name="birth"
            />
            Your Email:
            <input placeholder="Your email" onChange={GetValue} name="email" />
            Your Cell Number:
            <input
              placeholder="Phone Number"
              onChange={GetValue}
              name="phone"
            />
            Your Address:
            <input placeholder="Address" onChange={GetValue} name="address" />
            Where you Live?
            <input placeholder="City" onChange={GetValue} name="city" />
            Your country:
            <input placeholder="State" onChange={GetValue} name="state" />
            Which course you like for study:
            <input placeholder="course" onChange={GetValue} name="course" />
            <h3>School Education</h3>
            Your School Name:
            <input placeholder="School Name" onChange={GetValue} name="sname" />
            School Address:
            <input
              placeholder="School Address"
              onChange={GetValue}
              name="saddress"
            />
            Marks in Metric Class:
            <input
              placeholder="Marks in Matrics"
              onChange={GetValue}
              name="marks"
            />
            <p className="text-danger">{response}</p>
            <button onClick={SendForm}>Send Application</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Application;
