import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./views/home.js";
import {Provider}from "mobx-react";
import store from "./store";
ReactDOM.render(<Provider {...store}><Home /></Provider>, document.getElementById('root'));
