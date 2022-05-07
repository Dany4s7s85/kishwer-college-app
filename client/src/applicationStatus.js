import { useState, useEffect } from "react";
import axios from "axios";

function Status() {
  var [togle, settogle] = useState("false");
  const [applicationid, setapplicationid] = useState({ id: "" });
  const [dbdata, setdbdata] = useState([]);
  var [singleapplication, setsingleapplication] = useState({});
  function SetId(e) {
    const name = e.target.name;
    const value = e.target.value;
    setapplicationid({ ...applicationid, [name]: value });
  }

  function FindApplication() {
    if (applicationid.id === "21bsit8") {
      settogle("true");
    } else {
      axios
        .post("/oneapplication", applicationid)
        .then((res) => {
          setsingleapplication(res.data);
        })
        .catch((err) => {
          console.log("server error");
        });
    }
  }

  function UpdateStatus() {
    axios
      .post("/update", applicationid)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("server error");
      });
  }

  function DeleteApplication() {
    axios
      .post("/delete", applicationid)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("server error");
      });
  }

  function GetdbData() {
    axios
      .get("/fetchdb")
      .then((res) => {
        setdbdata(res.data);
      })
      .catch();
  }
  useEffect(() => {
    GetdbData();
  }, []);

  function ApplicationDetail() {
    if (singleapplication.name) {
      return (
        <div>
          <tr>
            <td>Application ID: </td>
            <td>{singleapplication.apid}</td>
          </tr>
          <tr>
            <td>Name: </td>
            <td>{singleapplication.name}</td>
          </tr>
          <tr>
            <td>Gender: </td>
            <td>{singleapplication.gender}</td>
          </tr>
          <tr>
            <td>Life status: </td>
            <td>{singleapplication.status}</td>
          </tr>
          <tr>
            <td>Date-of-Birth: </td>
            <td>{singleapplication.birth}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{singleapplication.email}</td>
          </tr>
          <tr>
            <td>Cell Number: </td>
            <td>{singleapplication.phone}</td>
          </tr>
          <tr>
            <td>Address: </td>
            <td>{singleapplication.address}</td>
          </tr>
          <tr>
            <td>State: </td>
            <td>{singleapplication.state}</td>
          </tr>
          <tr>
            <td>City: </td>
            <td>{singleapplication.city}</td>
          </tr>
          <tr>
            <td>Course: </td>
            <td>{singleapplication.course}</td>
          </tr>
          <h3>School Education Inforamtion</h3>
          <tr>
            <td>School Name: </td>
            <td>{singleapplication.sname}</td>
          </tr>
          <tr>
            <td>School Address: </td>
            <td>{singleapplication.saddress}</td>
          </tr>
          <tr>
            <td>Metric Result: </td>
            <td>{singleapplication.marks}</td>
          </tr>
          <tr>
            <td>Application Status: </td>
            <td>{singleapplication.appstatus}</td>
          </tr>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  function DisplaydbData(display) {
    return (
      <div>
        <tr>
          <td>
            <h5>Application ID:</h5>
          </td>
          <td>{display.apid}</td>
        </tr>
        <tr>
          <td>Name: </td>
          <td>{display.name}</td>
        </tr>
        <tr>
          <td>Gender: </td>
          <td>{display.gender}</td>
        </tr>
        <tr>
          <td>Life status: </td>
          <td>{display.status}</td>
        </tr>
        <tr>
          <td>Date-of-Birth: </td>
          <td>{display.birth}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>{display.email}</td>
        </tr>
        <tr>
          <td>Cell Number: </td>
          <td>{display.phone}</td>
        </tr>
        <tr>
          <td>Address: </td>
          <td>{display.address}</td>
        </tr>
        <tr>
          <td>State: </td>
          <td>{display.state}</td>
        </tr>
        <tr>
          <td>City: </td>
          <td>{display.city}</td>
        </tr>
        <tr>
          <td>Course: </td>
          <td>{display.course}</td>
        </tr>
        <h3>School Education Inforamtion</h3>
        <tr>
          <td>School Name: </td>
          <td>{display.sname}</td>
        </tr>
        <tr>
          <td>School Address: </td>
          <td>{display.saddress}</td>
        </tr>
        <tr>
          <td>Metric Result: </td>
          <td>{display.marks}</td>
        </tr>
        <tr>
          <td>Application Status: </td>
          <td>{display.appstatus}</td>
        </tr>
        <hr />
      </div>
    );
  }

  if (togle === "true") {
    return (
      <div className="StatusBodyMainDiv">
        <div>
          <div>
            <div>
              <input onChange={SetId} placeholder="Enter Order Id" name="id" />
              <button onClick={UpdateStatus}>Accept Application</button>
            </div>
          </div>
          <div className="">
            <div>
              <input onChange={SetId} placeholder="Enter Order Id" name="id" />
              <button onClick={DeleteApplication}>Cancer Application</button>
            </div>
          </div>
          <br />
          <br />
          <div>{dbdata.map(DisplaydbData)}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="StatusBodyMainDiv">
        <div>
          <div>
            <div>
              <input onChange={SetId} placeholder="Enter Order Id" name="id" />
              <button onClick={FindApplication}>Submit</button>
            </div>
          </div>
          <br />
          <br />
          <ApplicationDetail />
        </div>
      </div>
    );
  }
}

export default Status;
