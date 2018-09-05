import * as React from "react";
import { hot } from "react-hot-loader";
import { Router, Route, Switch } from "react-router";

import Root from "views/Root";
import IndexPage from "views/IndexPage";

/**
 * Render react DOM
 */
export default hot(module)((props) => (
  <Root>
    <Router {...props}>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  </Root>
));
