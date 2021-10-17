import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
