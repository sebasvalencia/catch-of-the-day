import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
// import App from "./components/App";
// import StorePicker from "./components/StorePicker";

import "./css/style.css";

//Every single component is a class

//Small component/class basic

//Render to the page
//render(<p>HEYYYY</p>, document.querySelector('#main'));
// render(<StorePicker />, document.querySelector('#main'));
// render(<App />, document.querySelector("#main"));
render(<Router />, document.querySelector('#main'));
