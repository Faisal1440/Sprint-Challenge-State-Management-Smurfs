import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store =createStore( applyMiddleware(thunk, logger));

ReactDOM.render(
<provider store={store}>
    <App />
    </provider>
    , document.getElementById("root"));
