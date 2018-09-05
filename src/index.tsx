import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import Application from "Application";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

/**
 * Render react DOM
 */
ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Switch>
        <Route
          path="/"
          render={(props) => {
            return <Application {...props} history={history} />;
          }}
        />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
