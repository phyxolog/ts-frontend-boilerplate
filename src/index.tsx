import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import App from "App";

const history = createBrowserHistory();

/**
 * Render react DOM
 */
ReactDOM.render(
  <Provider>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
