import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux"
import App from "./App";
import {Provider} from "react-redux"
import usersReducer from "./features/users/usersSlice";

// add imports and code
const store = createStore(usersReducer)

ReactDOM.render(
  // add imports and code
<Provider store = {store}>
  <App />
</Provider>,
  // add imports and code
  document.getElementById("root")
);
