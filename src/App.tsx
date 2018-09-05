import * as React from "react";
import { hot } from "react-hot-loader";
import { Router, Route, Switch } from "react-router";
import Root from "containers/Root";
import IndexPage from "containers/IndexPage";

/**
 * Render react DOM
 */
export default hot(module)(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  </Root>
));
