import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import About from "./aboutUs.js";
import Status from "./applicationStatus.js";
import Application from "./application.js";
import Fields from "./program.js";
import Admin from "./Admin.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={About} />
        <Route path="/status" component={Status} />
        <Route path="/apply" component={Application} />
        <Route path="/programmes" component={Fields} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
