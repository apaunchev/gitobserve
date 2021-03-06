import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./app";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
