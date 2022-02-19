import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomepageDark from "./pages/HomepageDark";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomepageDark />
        </Route>
        {/* <Route path="/dark" exact>
          <HomepageDark />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
