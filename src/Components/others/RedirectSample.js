import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

//Normal Redirect
<Redirect to="/users" />

//To redirect after certain activity
{this.state.redirectToUsers && <Redirect to='/users' />}

//Any routes loaded with React Router receive a history object on props
//You can directly interact with React Router's history object(history.push) if you prefer
props.history.push('new/path');

//Its friendly to redirect users that request the old URL
<Redirect from='/old-path' to='/new-path' />