import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HappyState from "./context/happyState";
// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./components/Dashboard";
import Unauthorized from "./components/Unauthorized";

function App() {
  return (
    <Router>
      <HappyState>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/unauthorized">
            <Unauthorized />
          </Route>
          <Route path="*">
            <Unauthorized/>
          </Route>
        </Switch>
      </HappyState>
    </Router>
  );
}

export default App;
