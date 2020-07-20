import React from "react";
import { Route, withRouter } from "react-router-dom";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Bye from "./components/Bye";
import ButtonPage from "./components/ButtonPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/hello" component={Hello} />
        <Route exact path="/bye" component={Bye} />
        <Route exact path="/buttons" component={ButtonPage} />
      </header>
    </div>
  );
}

export default withRouter(App);