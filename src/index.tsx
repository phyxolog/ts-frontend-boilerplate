import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import Application from "Application";

const history = createBrowserHistory();

/**
 * Render react DOM
 */
ReactDOM.render(
  <Provider>
    <Application history={history} />
  </Provider>,
  document.getElementById("root")
);
