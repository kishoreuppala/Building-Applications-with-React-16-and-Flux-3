import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {render} from "react-dom";
import App from "./Components/App";
//equals to --> const render = ReactDOM.render;
// import HomePage from "./Components/HomePage";
// import AboutPage from "./Components/AboutPage";
import {BrowserRouter as Router} from 'react-router-dom';

render(<Router><App/></Router>, document.getElementById('root'));
