import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Unauthorized from "./components/Unauthorized";
import AddRecord from "./components/AddRecord";
import Submitted from "./components/Submitted";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/add">
          <AddRecord />
        </Route>
        <Route exact path="/submitted">
          <Submitted />
        </Route>
        <Route exact path="/unauthorized">
          <Unauthorized />
        </Route>
        <Route path="*">
          <Unauthorized />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
