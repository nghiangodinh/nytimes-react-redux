import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";

import reducers from "./reducers";
import ArticlesListPage from "./pages/ArticlesList";
import ArticleDetailPage from "./pages/ArticleDetail"

import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:id" component={ArticleDetailPage} />
          <Route path="/" component={ArticlesListPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
